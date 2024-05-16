import React from "react";
import Header from "../../components/header";
import Carousel from "../../components/carousel";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlide={1} category={"Trending"} />
      <h1 style={{ color: "white" }}>Horror Movie</h1>
      <Carousel numberOfSlide={6} category={"Horror"} />
      <h1 style={{ color: "white" }}>Comedy Movie</h1>
      <Carousel numberOfSlide={6} category={"Comedy"} />
      <h1 style={{ color: "white" }}>Action Movie</h1>
      <Carousel numberOfSlide={6} category={"Action"} />
    </div>
  );
}

export default HomePage;
