import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      // Remove /tipstracker from the redirect path if it's there
      const cleanRedirectPath = redirectPath.replace(/^\/tipstracker/, "");
      navigate(cleanRedirectPath); // Navigate to the preserved path
    }
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default RedirectHandler;
