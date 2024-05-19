import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM } from "../utils/constants";
import { MENU_ITEM_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);


  const { resId } = useParams();
  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    // console.log(data)

    const json = await data.json();

    setResInfo(json.data);

    // console.log(json);
  };

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
  } = resInfo?.cards[2]?.card?.card?.info;

  // if()
  const { itemCards, title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  const { itemCards: itemCards1, title: title1} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards1);


//   const { title1 } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log(itemCards1);

  return (
    <div className="menu">
      <div className="basicInfo">
        <h2>{name}</h2>
        <div className="details">
          <p>
            {avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </p>
          <p>{cuisines.join(", ")}</p>
          <p>
            • Outlet <span className="placeName">{areaName}</span>
          </p>
          <p>• {resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime} mins</p>
        </div>
      </div>
      <ul>
        <h2 className="item-list-name">
          {title} ({itemCards.length})
        </h2>
        {itemCards.map((item) => (
          <li className="itemList" key={item.card.info.id}>
            <div className="item-data">
              <p>{item.card.info.name}</p>
              <p>₹ {item.card.info.price / 100}</p>
              <p>
                ★ {item.card.info.ratings.aggregatedRating.rating}{" "}
                <span>
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </p>
              <p className="cuisines">{item.card.info.description}</p>
            </div>
            <div className="item">
              <img
                className="menu-img"
                src={
                  MENU_ITEM_IMG + item.card.info.imageId ||
                  item.card.info.cloudinaryImageId
                }
              ></img>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <h2 className="item-list-name">
          {title1} ({itemCards1.length})
        </h2>
        {itemCards1.map((item) => (
          <li className="itemList" key={item.card.info.id}>
            <div className="item-data">
              <p>{item.card.info.name}</p>
              <p>₹ {item.card.info.price / 100}</p>
              <p>
                ★ {item.card.info.ratings.aggregatedRating.rating}{" "}
                <span>
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </p>
              <p className="cuisines">{item.card.info.description}</p>
            </div>
            <div className="item">
              <img
                className="menu-img"
                src={
                  MENU_ITEM_IMG + item.card.info.imageId ||
                  item.card.info.cloudinaryImageId
                }
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
