import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import findUser from "../UseFindUser";

import Error from "./Error";
import Button from "./Button";

import "./Card.css";

const CardBodyTipsForm = ({ cardBodyTemplate, showSuccess }) => {
  const { user, loading: loadingUser } = findUser();

  const date = useMemo(() => new Date(), []);
  // Getting the full length of the day
  const fullDayName = date.toLocaleString("en-US", { weekday: "long" });
  // Format the date as MM/DD/YYYY
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const [updateCurrentUserCollection, setUpdateCurrentUserCollection] =
    useState(false);
  const [todayTipAdjustment, setTodayTipAdjustment] = useState(false);
  const [firstCurrentUserTipEntry, setFirstCurrentUserTipEntry] =
    useState(false);
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formState, setFormState] = useState({
    TipsGross: 0,
    TipsNet: 0,
    dayName: fullDayName,
    date: formattedDate,
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormState({
      ...formState,
      [name]: value,
    });
    if (formState.TipsGross && formState.TipsNet) {
      setDisabledButton(false);
    }
  };
  // Resetting formState and other states in one function to avoid repeating the same lines
  const resetFormAndStates = () => {
    setLoading(false);
    setDisabledButton(true);
    setError("");
    setUpdateCurrentUserCollection(false);
    setFirstCurrentUserTipEntry(false);
    setFormState({
      TipsGross: 0,
      TipsNet: 0,
      dayName: fullDayName,
      date: formattedDate,
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
      showSuccess("Today's tips successfully adjusted");
    } catch (error) {
      setError(error.message);
    } finally {
      resetFormAndStates();
    }
  }, [userTipsData, user, formState]);

  // When user enters the most recent tips
  const updateTheCollection = useCallback(async () => {
    const userDocRef = doc(db, "users", user.uid);

    try {
      // Atomically add a new region to the "regions" array field.
      await updateDoc(userDocRef, {
        tips: arrayUnion({ ...formState }),
      });
      showSuccess("Tips added successfully");
    } catch (error) {
      setError(error.message);
    } finally {
      resetFormAndStates();
    }
  }, [user, formState, userTipsData, updateTodaysTips]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (firstCurrentUserTipEntry || updateCurrentUserCollection) {
      updateTheCollection();
    } else if (todayTipAdjustment) {
      updateTodaysTips();
    }
  };

  useEffect(() => {
    const fetcData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = []; // Initialize an array to store the stringified objects
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        dataArray.push(data); // Push the data object into the dataArray
      });

      setUsers(dataArray); // list of users and their tips collection
    };
    fetcData();
  }, []);

  useEffect(() => {
    if (users.length) {
      const loggedinUser = users.filter(
        (eachUser) => eachUser.email === user.email
      );

      if (!loggedinUser[0].tips) {
        setFirstCurrentUserTipEntry(true);
      }
      // If loggedin user already did enter his/her tips in the past then we set update the collection to true and the collection will be update thru handleSubmit
      if (loggedinUser[0].tips) {
        const tipsAdjustment = loggedinUser[0].tips.filter(
          (tip) => tip.date === formattedDate
        );
        // If loggedin user is trying to correct is today's tip entry we trigger updateTodaysTips her so he/her can do it
        if (tipsAdjustment.length) {
          setTodayTipAdjustment(true);
          setUserTipsData(loggedinUser[0].tips); // pulling the tips list of the current loggedin user
        } else {
          setUpdateCurrentUserCollection(true);
        }
      }
    }
  }, [users, user]);

  useEffect(() => {
    // When the form is completely filled (even if autocomplete fills it) we enable the submit button
    if (formState.TipsGross && formState.TipsNet) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [formState]);

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
          loading={loading}
          disabled={disabledButton}
          error={error}
        >
          add tips
        </Button>
        {error && <Error error={error} />}
      </div>
    </form>
  );
};
export default CardBodyTipsForm;
