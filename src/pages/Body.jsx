import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import WelcomePopup from "./WelcomePopup";

const Body = () => {
  const [showPopup, setShowPopup] = useState(true);

  // Open immediately when site loads
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <WelcomePopup closePopup={closePopup} />}
      <Navbar openPopup={openPopup} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;