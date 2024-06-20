import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../assets/prev.png";
import RightArrow from "../assets/next.png";
import Shimmer from "./Shimmer";
import TopRestaurantCarousel from "./TopRestaurantCarousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faChevronRight,faChevronLeft,} from "@fortawesome/free-solid-svg-icons";

const FoodCarousel = () => {
  const [foodType, setFoodType] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2182455&lng=72.8825627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    setFoodType(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setTitle(json?.data?.cards[0]?.card?.card?.header?.title);
    // console.log(setTitle);
  };

  const SlickArrowLeft = ({ currentSlide, ...props }) => (
    <img
      src={LeftArrow}
      alt="prevArrow"
      {...props}
      disabled={currentSlide === 0}
      style={{
        cursor: currentSlide === 0 ? "default" : "pointer",
        opacity: currentSlide === 0 ? 0.5 : 1,
        width: "33px",
        height: "auto",
        background: "#E3E3E3",
        padding: "5px",
        borderRadius: "100%",
        position: "absolute",
        top: "-32px",
        left: "850px"
      }}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img
      className="w-16"
      src={RightArrow}
      alt="nextArrow"
      {...props}
      disabled={currentSlide >= slideCount - 3}
      style={{
        cursor: currentSlide >= slideCount - 5.5 ? "default" : "pointer",
        opacity: currentSlide >= slideCount - 5.5 ? 0.5 : 1,
        width: "33px",
        height: "auto",
        background: "#E3E3E3",
        padding: "5px",
        borderRadius: "100%",
        position: "absolute",
        top: "-32px",
        right: "20px"
      }}
    />
  );


  // export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 2.8,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  if(foodType.length === 0 ){
    return <Shimmer />;
  }

  return (
    <div className="w-[75%] border-[1px] border-b-gray-300 border-x-0 py-11">
      <div className="">
        <h1 className="font-bold text-[22px] py-3 ">
          {title}
        </h1>
      </div>
      <div className="pb-4">
        <Slider {...settings}>
          {foodType.map((slide) => (
            <div
              className="flex flex-col cursor-pointer"
              key={slide.id}
            >
              <img
                className="w-36 h-44 mx-3"
                src={CDN_URL + slide.imageId}
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default FoodCarousel;
