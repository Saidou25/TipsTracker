import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import findUser from "../UseFindUser";

import Error from "../components/Error";
import Button from "../components/Button";

import "../components/Card.css";

const EnterTipsCard = ({ showSuccess, cardBodyTemplate }) => {
  const { user, loading: loadingUser } = findUser();

  const date = useMemo(() => new Date(), []);
  // Getting the full length of the day
  const fullDayName = date.toLocaleString("en-US", { weekday: "long" });
  // Format the date as MM/DD/YYYY
  // const formattedDate = "01/15/2025"; for testing
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const [customDate, setCustomDate] = useState("");
  const [warning, setWarning] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [updateCurrentUserCollection, setUpdateCurrentUserCollection] =
    useState(false);
  const [todayTipAdjustment, setTodayTipAdjustment] = useState(false);
  const [firstCurrentUserTipEntry, setFirstCurrentUserTipEntry] =
    useState(false);
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    TipsGross: "",
    TipsNet: "",
    dayName: fullDayName,
    date: formattedDate,
  });

  const form = useRef();
  const userDocRef = doc(db, "users", "userId");
  const { fields, footer, templateTitle } = cardBodyTemplate;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage("");
    setWarning("");
    if (name === "Custom date: ") {
      const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
      if (!regex.test(value)) {
        setErrorMessage("Entry must match MM/DD/YYYY format.");
        return;
      }
      const today = new Date(value);
      // Getting the full length of the day
      const fullCustomDayName = today.toLocaleDateString("en-US", {
        weekday: "long",
      });

      // Format the date as MM/DD/YYYY
      const formattedCustomDate = today.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
      setCustomDate(formattedCustomDate);
      setFormState({
        ...formState,
        dayName: fullCustomDayName,
        date: formattedCustomDate,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
    if (formState.TipsGross && formState.TipsNet) {
      setDisabledButton(false);
    }
  };

  // Resetting formState and other states in one function to avoid repeating the same lines
  const resetFormAndStates = () => {
    setLoading(false);
    setDisabledButton(true);
    setErrorMessage("");
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
      showSuccess("Today's tips successfully adjusted...");
      setErrorMessage("");
    } catch {
      setErrorMessage("Could not update today's tips. Please try again later.");
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
      showSuccess("Tips added successfully...");
      setErrorMessage("");
    } catch {
      setErrorMessage("Failed adding tips.");
    } finally {
      resetFormAndStates();
    }
  }, [user, formState, userTipsData, updateTodaysTips]);

  // Updating old tips
  const correctPreviousTip = async () => {
    const userDocRef = doc(db, "users", user.uid);

    // Step 2: Fetch the current document
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data().tips;
      const tipsData = data.tips || [];
      // console.log(data)
      //    // Step 3: Update the specific object in the array
      const updatedTips = tipsData.map((tip) =>
        tip.date === customDate ? { ...tipsData, ...updatedTips } : tipsData
      );

      //    // Step 4: Write the updated array back to Firestore
      //    await updateDoc(userDocRef, { activities: updatedActivities });
      //    console.log("Activity updated successfully!");
      //  } else {
      //    console.log("Document does not exist!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (confirm) {
      console.log("Confirmed");
      return;
    }
    if (firstCurrentUserTipEntry || updateCurrentUserCollection || customDate) {
      updateTheCollection();
    } else if (todayTipAdjustment) {
      updateTodaysTips();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const dataArray = []; // Initialize an array to store the stringified objects
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data); // Push the data object into the dataArray
        });

        setUsers(dataArray); // list of users and their tips collection
      } catch {
        setErrorMessage("Failed to fetch user data: ");
      }
    };
    fetchData();
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
      if (loggedinUser[0]?.tips) {
        const tipsAdjustment = loggedinUser[0].tips.filter(
          (tip) => tip.date === formattedDate
        );
        const olderTip = loggedinUser[0].tips.filter(
          (tip) => tip.date === customDate
        );
        if (olderTip[0]?.date) {
          setWarning(
            `You are attempting to overwrite your tips for ${olderTip[0].date}. Please confirm that this is intentional.`
          );
        }
        // If loggedin user is trying to correct is today's tip entry we trigger updateTodaysTips her so he/her can do it
        if (tipsAdjustment.length) {
          setTodayTipAdjustment(true);
          setUserTipsData(loggedinUser[0].tips); // pulling the tips list of the current loggedin user
        } else {
          setUpdateCurrentUserCollection(true);
        }
      }
    }
  }, [users, user, customDate, warning]);

  useEffect(() => {
    // When the form is completely filled (even if autocomplete fills it) we enable the submit button
    if (formState.TipsGross && formState.TipsNet) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [formState]);

  return (
    <form ref={form} role="form" className="tips-form" onSubmit={handleSubmit}>
      <div className="my-2 g-0">
        <br />
        {fields &&
          fields.map((field) => (
            <div className="login-signup" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="mb-3"
                name={field.label}
              >
                {field.label === "TipsGross" && <span>Tips (gross): </span>}
                {field.label === "TipsNet" && <span>Tips (net): </span>}
                {field.label !== "TipsNet" && field.label !== "TipsGross" && (
                  <span>{field.label}</span>
                )}
              </label>

              {field.label === "Today's date: " ? (
                <div className="login-input mb-3">{formattedDate}</div>
              ) : (
                <input
                  data-testid="login"
                  id={field.label}
                  inputMode={field.inputMod}
                  type={field.type}
                  className="login-input mb-3"
                  placeholder={field.placeholder}
                  autoComplete="on"
                  name={field.label}
                  value={formState.label}
                  onChange={handleChange}
                />
              )}
              {field.label === "Custom date: " && warning && (
                <>
                  <span>{warning}</span>
                  <button onClick={() => setConfirm(true)}>confirm</button>
                </>
              )}
            </div>
          ))}
        {errorMessage ? <Error message={errorMessage} /> : null}
        <Button
          type="submit"
          className="button"
          disabled={disabledButton}
          loading={loading}
          error={errorMessage}
          onClick={handleSubmit}
        >
          login
        </Button>
      </div>
    </form>
  );
};
export default EnterTipsCard;
