import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Slider from "react-slick";
import LeftArrow from "../assets/prev.png";
import RightArrow from "../assets/next.png";
import Shimmer from "./Shimmer";

const TopRestaurantCarousel = () => {
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [topRes, setTopRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2182455&lng=72.8825627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setTopRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(topRestaurant);
    setTopRes(json?.data?.cards[1]?.card?.card?.header.title);
    console.log(topRes);
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
        top: "-50px",
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
        cursor: currentSlide >= slideCount - 3 ? "default" : "pointer",
        opacity: currentSlide >= slideCount - 3 ? 0.5 : 1,
        width: "33px",
        height: "auto",
        background: "#E3E3E3",
        padding: "5px",
        borderRadius: "100%",
        position: "absolute",
        top: "-50px",
        right: "20px"
      }}
    />
  );

  var settings = {
    dots: false,
    // infinite: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  // if(topRestaurant.length === 0){
  //   return <Shimmer />;
  // }

  return (
    <div className="w-[75%]  border-[1px] border-b-gray-300 border-x-0 py-10">
    {/* <div className=""> */}
      <div className="">
        <h1 className="font-bold text-[22px] py-3 ">{topRes}</h1>
      </div>
      <div className="py-5">
        <Slider {...settings}>
          {topRestaurant.map((resSlide) => (
            <div
              className="flex flex-col w-[321px] h-[300px] hover:scale-95 cursor-pointer"
              key={resSlide.id}
            >
              <img
                className="w-[273px] h-[182px] mx-3 object-cover rounded-2xl"
                src={CDN_URL + resSlide.info.cloudinaryImageId}
              ></img>
              <div className="w-[250px]">
                <p className="px-3 pt-3 font-semibold text-lg text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">
                  {resSlide.info.name}
                </p>
                <p className="px-3 font-semibold text-base text-green-900">
                  {resSlide.info.avgRatingString} -{" "}
                  {resSlide.info.sla.slaString}
                </p>
                <p className="px-3 text-[15px] text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
                  {resSlide.info.cuisines.join(" , ")}
                </p>
                <p className="px-3 text-[15px] mt-[-2px] text-gray-500">
                  {resSlide.info.areaName}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRestaurantCarousel;
