import React from "react";
import FrontLayout from "../common/FrontLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import MoviesRow from "../components/MoviesRow/MoviesRow";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";
import TvSeriesRow from "../components/TvSeriesRow/TvSeriesRow";

const HomePage = () => {
  return (
    <FrontLayout>
      <HeroSection />
      <MoviesRow />
      <TvSeriesRow />

      <TrendingMovies />
    </FrontLayout>
  );
};

export default HomePage;
