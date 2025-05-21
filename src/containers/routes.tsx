import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(
  () => import(/* webpackChunkName: "Home" */ "@src/pages/Home")
);
const Cards = lazy(
  () => import(/* webpackChunkName: "Cards" */ "@src/pages/Cards")
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Redirect default path `/` to `/cards` */}
        <Route path="/" element={<Navigate to="/cards" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards/:tab" element={<Cards />} />
      </Routes>
    </Suspense>
  );
};
