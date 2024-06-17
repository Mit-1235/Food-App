import { useState } from "react";
import ItemList, { withRating } from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);

  // const ReataurantRating = withRating(ItemList);

  const handleClick = () => {
    setShowItems(!showItems);

    // const arrow = document.getElementById("arrow");
    // // var i = true;
    // if(!showItems){
    //     arrow.style.transform = 'rotate(180deg)';
    //     // return i = false;
    // }
    // else{
    //     arrow.style.transform = 'rotate(360deg)';
    //     // return i = true;
    // }

    // // arrow.classList.add("error");
  };

  return (
    <div className=" select-none flex justify-center w-[100%] ">
      <div
        // onClick={handleClick}
        className=" cursor-pointer border-t-[14px] border-gray-200 flex flex-col justify-center items-center w-[60%] px-4"
      >
        <div
          onClick={handleClick}
          className=" flex justify-between items-center w-[100%] h-16 bg-white">
          <p className="font-bold text-lg text-black">
            {data.title} ({data.title.length})
          </p>
          <img
            id="arrow"
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/3838/3838683.png"
          ></img>
          {/* <p>⬇️</p> */}
        </div>

        {/* { data.itemCards[0].card.info.ratings.aggregatedRating.ratingCountV2 > 0 ? (
          <ReataurantRating items={data.itemCards} />
        ) : (
          showItems && <ItemList items={data.itemCards} />
        )} */}
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
