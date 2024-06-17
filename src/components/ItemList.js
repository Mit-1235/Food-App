import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { MENU_ITEM_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

//   const rate = document.getElementsByClassName("rating");
//   const removeRating = () => {

//         if(items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 < 0){
//             rate.remove();
//             // console.log("hey");
//         };
//     }
  
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="itemList border-b-[1px] border-gray-300 flex h-[220] w-[100%] justify-between"
          key={item?.card?.info?.id}
        >
          {/* <div className="flex "> */}
          <div className="item-data flex flex-col justify-center px-2">
            <p className="w-[500px] text-gray-700 font-semibold text-[18px] overflow-hidden text-ellipsis whitespace-nowrap">
              {item?.card?.info?.name}
            </p>
            <p className="text-gray-700 font-semibold text-md">
              ₹{" "}
              {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="rating py-3 text-green-800 font-semibold text-sm">
              ★ {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
              <span className="text-gray-500 font-normal text-xs">
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </span>
            </p>
            <p className="cuisines w-[500px] text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="item flex flex-col justify-center items-center px-2">
            <img
              className="menu-img h-[144px] w-[156px] rounded-xl object-cover mt-4"
              src={
                MENU_ITEM_IMG + item?.card?.info?.imageId ||
                item?.card?.info?.cloudinaryImageId
              }
            ></img>
            <button className="w-[120px] h-[40px] rounded-lg text-lg font-bold text-green-600 relative shadow-xl top-[-8%] bg-white"
            //  onClick={handleAddItem}
             onClick={() => handleAddItem(item)}>
              ADD
            </button>
          </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

// higher order component

// export const withRating = (ItemList) => {
//   return (props) => {
//     return (
//       <div>
//         <p className="rating py-3 text-green-800 font-semibold text-sm">
//           ★ {item.card.info.ratings.aggregatedRating.rating}{" "}
//           <span className="text-gray-500 font-normal text-xs">
//             ({item.card.info.ratings.aggregatedRating.ratingCountV2})
//           </span>
//         </p>
//         <ItemList {...props}/>
//       </div>
//     );
//   };
// };

export default ItemList;
