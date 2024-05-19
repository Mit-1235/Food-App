import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const{ resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, deliveryTime,  } = resData?.info;
    return(
        // <div className="res-card" style={{ backgroundColor: "aliceblue"}}>
        <div className="res-card">
            <img className="res-logo" alt="food-img" 
                src={ CDN_URL + 
                cloudinaryImageId }>
            </img>
            <p>{name}</p>
            <p>{avgRating} Stars - {sla.deliveryTime} Minutes</p>
            <p>{cuisines.join(", ")}</p>
            {/* <p>{avgRating} Stars</p> */}
            <p>{costForTwo} Person</p>
            {/* <p>{sla.deliveryTime} Minutes</p> */}
        </div>
    );
};

export default RestaurantCard;