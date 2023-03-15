import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { UserContext } from "context/userContext";
import TransitionEffect from "components/TransitionEffect";
import BannerPage from "pages/BannerPage";
import CardsPage from "pages/CardsPage";
import CardPage from "pages/CardPage";
import { AnimatePresence } from "framer-motion";

function Router() {
  const { userEmail } = useContext(UserContext);
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <TransitionEffect>
        <Routes key={location.pathname} location={location}>
          {userEmail && (
            <>
              <Route path="*" element={<CardsPage />} />
              <Route path="/cards/:cardId" element={<CardPage />} />
            </>
          )}
          {!userEmail && <Route path="*" element={<BannerPage />} />}
        </Routes>
      </TransitionEffect>
    </AnimatePresence>
  );
}

export default Router;
