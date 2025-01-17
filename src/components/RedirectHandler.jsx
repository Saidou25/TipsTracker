import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      console.log("redirectPath", redirectPath);
      navigate(redirectPath); // Navigate to the preserved path
    }
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
