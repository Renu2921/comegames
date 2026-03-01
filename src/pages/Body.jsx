import React, { useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Fallback from "./Fallback";

const WelcomePopup = lazy(() => import("./WelcomePopup"));

const Body = () => {
  const [showPopup, setShowPopup] = useState(true);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <Suspense fallback={<Fallback/>}>
          <WelcomePopup closePopup={closePopup} />
        </Suspense>
      )}

      <Navbar openPopup={openPopup} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;