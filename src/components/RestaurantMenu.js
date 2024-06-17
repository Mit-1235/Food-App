// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_ITEM } from "../utils/constants";
import { MENU_ITEM_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ReataurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  
  const resInfo = useRestaurantMenu(resId);

  // const [resInfo, setResInfo] = useState(null);


  // const { resId } = useParams();
  // const params = useParams();
  // console.log(params);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   console.log(data)

  //   const json = await data.json();

  //   setResInfo(json.data);

  //   console.log(json);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards, title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories);

  return (
    <div className="select-none menu flex flex-col justify-center items-center w-[100%] bg-white">
      <div className=" basicInfo bg-gradient-to-b from-white to-gray-200 mt-24 m-10 px-3 flex flex-col justify-center h-[250] w-[60%] items-start rounded-3xl">
        <h2 className="text-2xl font-bold pb-5">{name}</h2>
        <div className="details bg-white p-5 flex flex-col h-[160] w-[99%] ml-1 border-[1px] rounded-xl border-gray-300">
          <p className="font-semibold">
          ★ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </p>
          <p className="py-1 text-orange-600 text-sm font-medium">{cuisines.join(", ")}</p>
          <p className="py-1 text-sm font-semibold">
            • Outlet <span className="px-3 placeName text-gray-600 font-normal">{areaName}</span>
          </p>
          <p className="py-1 text-sm font-semibold">• {sla?.deliveryTime} mins</p>
        </div>
      </div>

      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
      ))};

      {/* <div className="w-[60%]">
        <h2 className="item-list-name text-xl font-bold py-4 border-y-[1px] border-gray-300">
          {title} ({itemCards.length})
        </h2>
        {itemCards.map((item) => (
          <div className="itemList border-b-[1px] border-gray-300 flex h-[220] w-[100%] justify-between" key={item.card.info.id}>
            <div className="item-data flex flex-col justify-center">
              <p className="text-gray-700 font-semibold text-[18px]">{item.card.info.name}</p>
              <p className="text-gray-700 font-semibold text-md">₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
              <p className="rating py-3 text-green-800 font-semibold text-sm">
                ★ {item.card.info.ratings.aggregatedRating.rating}{" "}
                <span className="text-gray-500 font-normal text-xs">
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </p>
              <p className="cuisines w-[530px] text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">{item.card.info.description}</p>
            </div>
            <div className="item flex flex-col justify-center">
              <img
                className="menu-img h-[144px] w-[156px] rounded-xl object-cover"
                src={
                  MENU_ITEM_IMG + item.card.info.imageId ||
                  item.card.info.cloudinaryImageId
                }
              ></img>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
