// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
//props dùng để tái sử dụng component
//ví dụ muốn sử dụng lại component Carousel và muốn số trang hiển thị là 2 thì truyền props numberOfSlide = 2
//numberOfSlide

//
export default function Carousel({
  numberOfSlide,
  category,
  isUseNavigation = false,
  title,
}) {
  const [movies, setMovies] = useState([]);
  async function fetchMovie() {
    const response = await axios.get(
      "https://662a451467df268010a33ecb.mockapi.io/Movie"
    );
    console.log(response.data);
    setMovies(response.data);
  }

  useEffect(() => {
    fetchMovie();
  });
  return (
    <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
      {/*chi show title khi va chi khi co title => neu title === null => thi ko show title */}
      {title && <h1>{title}</h1>}
      <Swiper
        navigation={isUseNavigation}
        slidesPerView={numberOfSlide}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide>
              <img src={movie.poster_path} alt="example" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
