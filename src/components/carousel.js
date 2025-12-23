import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import y21_22 from "../images/archives/2021-2022.jpg";
import y22_23 from "../images/archives/2022-2023.jpg";
import steel_city_23 from "../images/steel city 2023.jpg";
import buds_natties_23 from "../images/buds nationals.jpg";
import lobster_pot_25 from "../images/LP25_team_picture_1.jpg";
import fl_25 from "../images/florida_team_photo_25.jpg";

const images = [
  {
    original: lobster_pot_25,
    sizes: "50px",
  },
  {
    original: fl_25,
    sizes: "50px",
  },
  {
    original: y21_22,
    sizes: "50px",
  },
  {
    original: y22_23,
    sizes: "50px",
  },
  {
    original: steel_city_23,
    sizes: "50px",
  },
  {
    original: buds_natties_23,
    sizes: "50px",
  },
];

const Carousel = () => {
  return (
    <div className="px-[10%]">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={10000}
      />
    </div>
  );
};

export default Carousel;
