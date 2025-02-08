import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { db } from "../firebase";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dateFormat } from "../helpers/dateFormat";
import { FaRegCheckCircle } from "react-icons/fa";
// import { FaSackDollar } from "react-icons/fa6";
// import { GiCoins } from "react-icons/gi";

import findUser from "../UseFindUser";

import Error from "../components/Error";
import Button from "../components/Button";

import "../components/Card.css";

const EnterTipsCard = ({ showSuccess, cardBodyTemplate }) => {
  const { user, loading: loadingUser } = findUser();
  const date = useMemo(() => new Date(), []);
  const { fullDayName, formattedDate } = dateFormat(date);

  const [showCustomDate, setShowCustomDate] = useState(false);
  const [customDate, setCustomDate] = useState("");
  const [showWarning, setShowWarning] = useState("");
  const [showWarningConfirmed, setShowWarningConfirmed] = useState("");
  const [confirm, setConfirm] = useState(false);
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
  const { fields, footer, templateTitle } = cardBodyTemplate;

  const handleshowWarning = (e) => {
    const { value } = e.target;
    if (value === "on") {
      setShowWarning("");
      setShowWarningConfirmed("Overwriting confirmed");
      setConfirm(true);
      setErrorMessage("");
    }
  };

  const handleshowCustomDate = (e) => {
    const { name, value } = e.target;
    if (name === "show-custom-date" && value === "on") {
      setShowWarning("");
      setShowCustomDate(true);
    }
    if (name === "cancel-custom-date" && value === "on") {
      setShowCustomDate(false);
      setShowWarning("");
      setShowWarningConfirmed(false);
      setErrorMessage("");
      setConfirm(false);
      setFormState({
        ...formState,
        dayName: fullDayName,
        date: formattedDate,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage("");
    // setShowWarning("");
    // console.log(name, value);
    if (name === "Custom date: ") {
      setConfirm(false);
      setShowWarning("");
      setShowWarningConfirmed("");
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
      const loggedinUser = users.filter(
        (eachUser) => eachUser.email === user.email
      );
      const olderTip = loggedinUser[0].tips.filter(
        (tip) => tip.date === formattedCustomDate
      );

      if (formattedCustomDate === formattedDate) {
        setFormState({
          ...formState,
          dayName: fullDayName,
          date: formattedDate,
        });
        setShowWarning("");
        setShowCustomDate(false);
        setShowWarningConfirmed("");
      }
      if (olderTip[0]) {
        setFormState({
          ...formState,
          dayName: fullCustomDayName,
          date: formattedCustomDate,
        });
        if (formattedCustomDate === olderTip[0].date) {
          setShowWarning(
            `You are about to overwrite your tips for ${formattedCustomDate}. Please confirm if this action is intentional`
          );
          return;
        }
      }
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
  };

  // Resetting formState and other states in one function to avoid repeating the same lines
  const resetFormAndStates = () => {
    setLoading(false);
    setDisabledButton(true);
    setErrorMessage("");
    setCustomDate("");
    setShowCustomDate(false);
    setShowWarning("");
    setShowWarningConfirmed("");
    setConfirm(false);
    setUserTipsData([]);
    setFormState({
      TipsGross: 0,
      TipsNet: 0,
      dayName: fullDayName,
      date: formattedDate,
    });
  };

  // if user wants to re-adjust the tips entered form the same day
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
      resetFormAndStates();
    } catch {
      setErrorMessage("Could not update today's tips. Please try again later.");
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

  // Delete old tip
  const deleteOldTip = async () => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    const tips = userDoc.data().tips;
    for (let findTip of tips) {
      if (findTip.date === customDate) {
        try {
          await updateDoc(userDocRef, {
            tips: arrayRemove(findTip),
          });
        } catch (error) {
          console.log(error.message);
        } finally {
          updateTheCollection();
        }
      }
    }
  };

  const handleSubmit = (e) => {
    if (customDate && !confirm && showWarning) {
      setErrorMessage("You must confirm your date change");
      return;
    }
    setLoading(true);
    if (users.length) {
      const loggedinUser = users.filter(
        (eachUser) => eachUser.email === user.email
      );
      if (!loggedinUser[0].tips.length) {
        updateTheCollection();
        // console.log("first time");
      } else {
        const allUserTips = loggedinUser[0].tips;
        for (let userTips of allUserTips) {
          if (userTips.date !== formattedDate && !customDate && !confirm) {
            updateTheCollection();
            // console.log("add today's tips")
          }
          if (userTips.date === formattedDate && !confirm && !customDate) {
            // updateTodaysTips("update today's tip");
            console.log();
          }
          if (customDate && !confirm) {
            // console.log("add forgotten tip")
            updateTheCollection();
          }
          if (confirm && customDate && userTips.date === customDate) {
            // console.log("delete old tip")
            deleteOldTip();
          }
        }
      }
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
    console.log(showWarning)
    // When the form is completely filled (even if autocomplete fills it) we enable the submit button
    if (!formState.TipsGross || !formState.TipsNet) {
      setDisabledButton(true);
      return;
    } else if (formState.TipsGross && formState.TipsNet) {
      setErrorMessage("");
      setDisabledButton(false);
    }
  }, [formState]);
console.log(formState);
  return (
    <form ref={form} role="form" className="tips-form" onSubmit={handleSubmit}>
      <div className="my-2 g-0">
        <br />

        {fields &&
          fields.map((field) => (
            <div className="tips-label-input" key={field.label}>
              {field.label === "Custom date: " && !showCustomDate ? (
                <div className="showWarning-div-check">
                  <input
                    className="all-checks"
                    type="checkbox"
                    name="show-custom-date"
                    onClick={handleshowCustomDate}
                  />
                  <span className="warning-span">
                    Tips will default to today's date. Check this box to select
                    a different date if needed.
                  </span>
                </div>
              ) : (
                <>
                  <label
                    data-testid={`enterTipsForm-label-${field.label}`}
                    htmlFor={field.label}
                    className="mb-3"
                    name={field.label}
                  >
                    {field.label === "TipsGross" && (
                      <div className="coins-div">
                        <div className="coins-span">Gross tips: </div>
                        {/* <div className="coins">
                          <FaSackDollar />:
                        </div> */}
                      </div>
                    )}
                    {field.label === "TipsNet" && (
                      <div className="coins-div">
                        <div className="coins-span">Net tips: </div>
                        {/* <div className="coins">
                          <GiCoins />:
                        </div> */}
                      </div>
                    )}
                    {field.label !== "TipsNet" &&
                      field.label !== "TipsGross" && <span>{field.label}</span>}
                  </label>
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
                  {field.label === "Custom date: " && showCustomDate && (
                    <div className="show-custom-date">
                      <input
                        className="all-checks"
                        type="checkbox"
                        name="cancel-custom-date"
                        onClick={handleshowCustomDate}
                      />
                      <span className="warning-span">Cancel custom date</span>
                    </div>
                  )}
                  {field.label === "Custom date: " && showWarning && (
                    <div className="showWarning-div-check">
                      <input
                        className="all-checks"
                        type="checkbox"
                        name="showWarning"
                        onClick={handleshowWarning}
                      />
                      <span className="warning-span">{showWarning}</span>
                    </div>
                  )}
                  {field.label === "Custom date: " && showWarningConfirmed && (
                    <div className="showWarning-div-fa">
                      <FaRegCheckCircle className="facheck-circle" />
                      <span>{showWarningConfirmed}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        {errorMessage ? <Error message={errorMessage} /> : null}
        <br />
        <Button
          type="submit"
          className="button"
          disabled={disabledButton}
          loading={loading}
          error={errorMessage}
          onClick={handleSubmit}
        >
          submit
        </Button>
        <br />
      </div>
    </form>
  );
};
export default EnterTipsCard;
