import { CDN_URL } from "../utils/constants";
import { STAR } from "../utils/constants";


const RestaurantCard = (props) => {
    const{ resData } = props;
    // console.log(resData);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, deliveryTime, locality } = resData?.info;
    return(
        // <div className="res-card" style={{ backgroundColor: "aliceblue"}}>
        <div className="res-card flex flex-col w-[210px] h-[270px] m-4 hover:scale-95 ">
            <img className="res-logo w-[210px] h-[140px] object-cover rounded-2xl" alt="food-img" 
                src={ CDN_URL + 
                cloudinaryImageId }>
            </img>
            <p className="px-3 pt-3 font-semibold text-lg text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis">{name}</p>
            <p className="px-3 font-semibold text-base text-green-900">★ {avgRating} • {sla.slaString}</p>
            <p className="px-3 text-[15px] text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(", ")}</p>
            {/* <p>{avgRating} Stars</p> */}
            <p className="px-3 text-[15px] mt-[-2px] text-gray-500">{locality}</p>
            {/* <p>{sla.deliveryTime} Minutes</p> */}
        </div>
    );
};

export default RestaurantCard;