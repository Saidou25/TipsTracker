import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import Button from "./Button";

import "./Card.css";

const CardBodyTipsForm = ({ cardBodyTemplate }) => {
  console.log(cardBodyTemplate);
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
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    TipsBrut: 0,
    TipsNet: 0,
    dayName: "",
    date: formattedDate,
  });

  const navigate = useNavigate();

  const form = useRef();

  const currentUser = auth.currentUser;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const updateTodaysTips = useCallback(async () => {
    userTipsData.pop();
    userTipsData.push(formState);
    // console.log("tips data", userTipsData);
    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
        tips: userTipsData,
        date: formattedDate,
      });
    } catch (error) {
      console.log("error", error.message);
    } finally {
      console.log("did set doc");
      setUpdateCurrentUserCollection(false);
      setFormState({
        TipsBrut: 0,
        TipsNet: 0,
        dayName: "",
        date: formattedDate,
      });
      navigate("/dashboard");
    }
  }, [userTipsData, currentUser, formattedDate, navigate, formState]);

  const updateTheCollection = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("update the collection");
      const userDocRef = doc(db, "users", currentUser.uid);

      if (userTipsData?.length && formState.date === formattedDate) {
        updateTodaysTips();
      }
      try {
        // Atomically add a new region to the "regions" array field.
        await updateDoc(userDocRef, {
          tips: arrayUnion({ ...formState, date: formattedDate }),
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log("did update doc/arrayUnion");
        setFormState({
          TipsBrut: 0,
          TipsNet: 0,
          dayName: "",
          // date: "09/04/2024",
          date: formattedDate,
        });
        navigate("/dashboard");
      }
    },
    [
      currentUser,
      formattedDate,
      navigate,
      formState,
      userTipsData,
      updateTodaysTips,
    ]
  );

  const createTheCollection = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("create the collection");
      if (updateCurrentUserCollection) {
        console.log("true, there is a collection");
        updateTheCollection();
      } else
        try {
          await setDoc(doc(db, "users", currentUser.uid), {
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            tips: formState,
            date: formattedDate,
          });
        } catch (error) {
          console.log("error", error.message);
        } finally {
          console.log("added for first time to doc");
          setFormState({
            TipsBrut: 0,
            TipsNet: 0,
            dayName: "",
            date: formattedDate,
          });
          navigate("/dashboard");
        }
    },
    [
      currentUser,
      formState,
      formattedDate,
      updateCurrentUserCollection,
      navigate,
      updateTheCollection,
    ]
  );

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
        (user) => user.email === currentUser.email
      );

      if (!loggedinUser[0].tips) {
        console.log("there are no tips yet for this user");
      }
      if (loggedinUser[0].tips) {
        console.log("there are tips for this user");
        setUpdateCurrentUserCollection(true);
        const currentUserTips = loggedinUser[0].tips;
        setUserTipsData(loggedinUser[0].tips); // pulling the tips list of the current loggedin user
      }
    }
  }, [users, currentUser]);

  return (
    <form
      ref={form}
      // role="form"
      className="tips-form"
      onSubmit={
        updateCurrentUserCollection ? updateTheCollection : createTheCollection
      }
    >
      <div className="row tips-form my-5 g-0" data-testid="card-body-tips-form">
        <br />
        {cardBodyTemplate.fields &&
          cardBodyTemplate.fields.map((field) => (
            <div className="div-label" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="col-lg-3 col-sm-6 mb-"
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
                inputMode="numeric"
                type={field.type}
                className="col-lg-6 col-sm-6 login-input mb-3"
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
