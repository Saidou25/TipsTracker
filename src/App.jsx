import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import EnterTips from "./pages/EnterTips";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Update from "./pages/Update";
import Team from "./components/Team";

import "bootswatch/dist/cyborg/bootstrap.min.css"; // Importing Bootstrap

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/tipstracker/' : '/'}>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/enterTips" element={<EnterTips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
