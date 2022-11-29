import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import MoviesPage from "../pages/MoviesPage";
import PersonDetail from "../pages/PersonDetail";
import PopularPeople from "../pages/PopularPeople";
import ViewAllCast from "../pages/ViewAllCast";
import ViewAllVideo from "../pages/ViewAllVideo";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />

      <Route path="/people" element={<PopularPeople />} />
      <Route path="/people/:id/:name" element={<PersonDetail />} />
      <Route path="/view-all-cast/:category/:id" element={<ViewAllCast />} />
      <Route path="/view-all-video/:category/:id" element={<ViewAllVideo />} />
      <Route path="/:category" element={<MoviesPage />} />
      <Route path="/:category/:id" element={<MovieDetail />} />
      <Route path="/:category/search/:keyword" element={<MoviesPage />} />
    </Routes>
  );
};

export default RouteConfig;
