import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../Css/Home.css";

// Import images
import Horror from "../Images/Home-Swiper/Horror.jpg";
import Romance from "../Images/Home-Swiper/Romance.jpg";
import Music from "../Images/Home-Swiper/Music.jpg";
import Crime from "../Images/Home-Swiper/Crime.jpg";
import Fantasy from "../Images/Home-Swiper/Fantasy.jpg";
import Animation from "../Images/Home-Swiper/Animation.jpg";
import History from "../Images/Home-Swiper/History.jpg";
import War from "../Images/Home-Swiper/War.jpg";

// Import required modules
import { Autoplay, EffectFade } from "swiper";
import Popular from "./Popular";

const Home = ({ onAdd }) => {
  const genres = [
    { name: "Horror", image: Horror },
    { name: "Romance", image: Romance },
    { name: "Music", image: Music },
    { name: "Crime", image: Crime },
    { name: "Fantasy", image: Fantasy },
    { name: "Animation", image: Animation },
    { name: "History", image: History },
    { name: "War", image: War },
  ];

  return (
    <>
      <div className="home-page-content-container">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          loop={true}
          modules={[Autoplay, EffectFade]}
          className="mySwiper">
          {genres.map((genre) => (
            <SwiperSlide key={genre.name}>
              <Link to={`/genre/${genre.name}`}>
                <img src={genre.image} alt={genre.name} className="swiper-img" />
                <p>{genre.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="home-blurb shadow-sm">
          <h2>Welcome to DVDShop.com</h2>
          <p>Discover our extensive collection of DVDs at unbeatable prices. From timeless classics to the latest blockbusters, we've curated a selection that caters to every taste. Our inventory is constantly updated with new releases, ensuring you always have access to the best entertainment. Experience the convenience of shopping for all your favorite movies in one place, backed by our commitment to quality and customer satisfaction. Start exploring our collection today!</p>
        </div>
      </div>
      <Popular onAdd={onAdd} />
    </>
  );
};

export default Home;
