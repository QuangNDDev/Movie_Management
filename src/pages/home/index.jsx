import React from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlide={1} category={"Trending"} autoplay />

      <Carousel
        numberOfSlide={6}
        category={"Horror"}
        isUseNavigation
        title={"Horror Movie"}
      />

      <Carousel
        numberOfSlide={6}
        category={"Comedy"}
        isUseNavigation
        title={"Comedy Movie"}
      />

      <Carousel
        numberOfSlide={6}
        category={"Action"}
        isUseNavigation
        title={"Action Movie"}
      />
    </div>
  );
}

export default HomePage;
