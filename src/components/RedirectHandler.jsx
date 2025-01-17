// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectHandler = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    const searchParams = window.location.pathname;
    console.log("searchParams", searchParams);
    // const params = new URLSearchParams(window.location.search);
    // console.log("params", params);
    // const redirectPath = params.get("redirect");
    // console.log("redirect to: " + redirectPath);
    // if (redirectPath) {
    //   console.log("redirect to: " + redirectPath);
    //   navigate(redirectPath); // Navigate to the preserved path
    // }
  }, []);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
