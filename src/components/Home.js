import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Css/Home.css";
import Horror from "../Images/Home-Swiper/Horror.jpg";
import Romance from "../Images/Home-Swiper/Romance.jpg";
import Music from "../Images/Home-Swiper/Music.jpg";
import Crime from "../Images/Home-Swiper/Crime.jpg";
import Fantasy from "../Images/Home-Swiper/Fantasy.jpg";
import Animation from "../Images/Home-Swiper/Animation.jpg";
import History from "../Images/Home-Swiper/History.jpg";
import War from "../Images/Home-Swiper/War.jpg";
// import required modules
import { Autoplay } from "swiper";

const Home = () => {
  return (
    <>
      <div className="home-page-content-container">
        <p className="home-blurb shadow">Welcome to our DVD sale company! We offer a wide selection of DVDs at discounted prices. From classic movies to the latest blockbusters, we have something for everyone. Our collection is constantly being updated with new titles, so be sure to check back often for the best deals. Shop with us and enjoy the convenience of buying all your favorite movies in one place. Happy shopping!</p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper shadow"
        >
          <SwiperSlide>
            <Link to="/genre/Horror">
              <img src={Horror} alt="Horror" className="swiper-img" />
              <p>Horror</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/Romance">
              <img src={Romance} alt="Romance" className="swiper-img" />
              <p>Romance</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/Music">
              <img src={Music} alt="Music" className="swiper-img" />
              <p>Music</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/Crime">
              <img src={Crime} alt="Crime" className="swiper-img" />
              <p>Crime</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/Fantasy">
              <img src={Fantasy} alt="Fantasy" className="swiper-img" />
              <p>Fantasy</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/Animation">
              <img src={Animation} alt="Animation" className="swiper-img" />
              <p>Animation</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/History">
              <img src={History} alt="History" className="swiper-img" />
              <p>History</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/genre/War">
              <img src={War} alt="War" className="swiper-img" />
              <p>War</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
