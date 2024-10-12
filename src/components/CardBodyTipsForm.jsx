import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import findUser from "../UseFindUser";

import Button from "./Button";

import "./Card.css";

const CardBodyTipsForm = ({ cardBodyTemplate }) => {
  const { user, loading } = findUser();

  const date = useMemo(() => new Date(), []);
  const todaysDayName = date.toString().slice(0, 3);
  // Get the date components
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  var day = ("0" + date.getDate()).slice(-2);
  var year = date.getFullYear();

  // Format the date as MM/DD/YYYY
  var formattedDate = month + "/" + day + "/" + year;
  // var formattedDate = new Date("07-28-2024");
  // console.log(formattedDate);

  const [updateCurrentUserCollection, setUpdateCurrentUserCollection] =
    useState(false);
  const [todayTipAdjustment, setTodayTipAdjustment] = useState(false);
  const [firstCurrentUserTipEntry, setFirstCurrentUserTipEntry] =
    useState(false);
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    TipsGross: 0,
    TipsNet: 0,
    dayName: "",
    date: formattedDate,
    // date: formattedDate,
  });

  const navigate = useNavigate();

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // if user wants to re-adjust the tips just entered
  let updatedTips = [];
  const updateTodaysTips = useCallback(async () => {
    const userDocRef = doc(db, "users", user.uid);
     // Remove the last entry if it exists
     if (userTipsData.length) {
      userTipsData.pop(); // Remove the last entry
    }
    updatedTips = [...userTipsData, { ...formState }]; // Create a new array with existing tips and the new one
    try {
      // Update Firestore with the new tips array
    await updateDoc(userDocRef, {
      tips: updatedTips,
    });
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("user tips were corrected successfully");
      setUpdateCurrentUserCollection(false);
      setFirstCurrentUserTipEntry(false);
      setFormState({
        TipsGross: 0,
        TipsNet: 0,
        dayName: "",
        date: formattedDate,
      });
      navigate("/dashboard");
    }
  }, [userTipsData, user, formattedDate, navigate, formState]);

  // When user enters the most recent tips
  const updateTheCollection = useCallback(async () => {
    const userDocRef = doc(db, "users", user.uid);

    // if (userTipsData?.length) {
    //   await updateTodaysTips();
    // }
    try {
      // Atomically add a new region to the "regions" array field.
      await updateDoc(userDocRef, {
        tips: arrayUnion({ ...formState }),
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("user tips were updated successfully");
      setUpdateCurrentUserCollection(false);
      setFirstCurrentUserTipEntry(false);
      setFormState({
        TipsGross: 0,
        TipsNet: 0,
        dayName: "",
        date: formattedDate,
      });
      navigate("/dashboard");
    }
  }, [user, navigate, formState, userTipsData, updateTodaysTips]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("in handle submit");
    if (firstCurrentUserTipEntry) {
      // console.log("case: 1 first time", firstCurrentUserTipEntry);
      updateTheCollection();
    }
    if (updateCurrentUserCollection) {
      // console.log("case: 2", updateCurrentUserCollection);
      updateTheCollection();
    }
    if (todayTipAdjustment) {
      // console.log("case: 3", todayTipAdjustment);
      updateTodaysTips();
    }
  };
  useEffect(() => {
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    if (!todaysDayName || !formState) {
      return;
    }
    for (let day of weekDays) {
      if (day.toString().slice(0, 3) === todaysDayName) {
        const name = "dayName";
        // Update formState only if the dayName doesn't exist
        if (!formState[name]) {
          setFormState({
            ...formState,
            // [name]: "Hier",
            [name]: day,
          });
        }
      }
    }
  }, [todaysDayName, formState, day]); // No dependancies here as we do only want to set the "dayName" and date at first rendering

  useEffect(() => {
    const inconue = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = []; // Initialize an array to store the stringified objects
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log(`${doc.id} => ${JSON.stringify(data)}`);
        dataArray.push(data); // Push the data object into the dataArray
      });

      setUsers(dataArray); // list of users and their collection
    };
    inconue();
  }, []);

  useEffect(() => {
    if (users.length) {
      const loggedinUser = users.filter(
        (eachUser) => eachUser.email === user.email
      );
      // console.log("tips for logged in user", loggedinUser[0].tips);
      if (!loggedinUser[0].tips) {
        // console.log(
        //   "there are no tips yet for this user",
        //   loggedinUser[0].tips
        // );
        setFirstCurrentUserTipEntry(true);
      }
      // If loggedin user already did enter his/her tips in the past then we set update the collection to true and the collection will be update thru handleSubmit
      if (loggedinUser[0].tips) {
        // console.log(loggedinUser[0].tips);
        const tipsAdjustment = loggedinUser[0].tips.filter(
          (tip) => tip.date === formattedDate
        );
        // If loggedin user is trying to correct is today's tip entry we trigger updateTodaysTips her so he/her can do it
        if (tipsAdjustment.length) {
          // console.log(
          //   "trying to correct today tips adjustment",
          //   tipsAdjustment
          // );
          setTodayTipAdjustment(true);
          setUserTipsData(loggedinUser[0].tips); // pulling the tips list of the current loggedin user
        } else {
          // console.log("there are tips for this user", loggedinUser[0].tips);
          setUpdateCurrentUserCollection(true);
        }
      }
    }
  }, [users, user]);

  return (
    <form
      ref={form}
      // role="form"
      className="tips-form"
      onSubmit={handleSubmit}
    >
      <div className="row my-5 g-0" data-testid="card-body-tips-form">
        <br />
        {cardBodyTemplate.fields &&
          cardBodyTemplate.fields.map((field) => (
            <div className="div-label" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="col-6"
                name={field.label}
              >
                {field.label}:
              </label>
              <br />
              <br />
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                inputMode={field.inputMod}
                type={field.type}
                className="col-6 login-input mb-3"
                placeholder={field.placeholder}
                style={{
                  fontStyle: "oblique",
                  paddingLeft: "3%",
                  color: "black",
                }}
                value={formState.field?.label}
                onChange={handleChange}
                name={field.label}
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                } // Prevents these keyboard keys to be inactive
              />
              <br />
              <br />
            </div>
          ))}
        <Button
          type="submit"
          className="button"
          disabled={false}
          loading={loading}
        >
          add tips
        </Button>
        {error && (
          <span className="text-danger" data-testid="oops">
            Oops, something went wrong...
          </span>
        )}
      </div>
    </form>
  );
};
export default CardBodyTipsForm;
