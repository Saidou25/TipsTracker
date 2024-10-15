import { useEffect, useState } from "react";
import { auth } from "./firebase";

const findUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [usingSince, setUsingSince] = useState("");

  useEffect(() => {
    // Start the loading timeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Set minimum loading duration to 5000 milliseconds

    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Extracting and formatting the creation date directly
      const [day, month, date, year] = currentUser.metadata.creationTime.split(" ");
      // Remove the comma from the date and set the formatted creation time
      setUsingSince(`${day.replace(",", "")} ${month} ${date} ${year}`);

        setUser(currentUser);

        // After setting user data, ensure loading persists until timeout
        setLoading(true); // Keep loading true while data is being fetched
      } else {
        // If no user is logged in, we can set loading to false immediately
        setLoading(false);
      }
    });

    return () => {
      clearTimeout(timeout); // Clear timeout on unmount
      unsubscribe();
    };
  }, []);
  return { user, loading, usingSince };
};
export default findUser;