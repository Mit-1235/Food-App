import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// delete mockData.js file
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Normal JS Variable
const Body = () => {

    // Local State Variable - (Supar Powerfull React Variable)
        const [listOfRestaurant, setListOfRestaurant] = useState([]);
        const [filteredRestaurant, setFilteredRestaurant] = useState([]);


        const[searchText, setSearchText] = useState('');

        useEffect(()=> {
            fetchData();
        }, []);

        const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2182455&lng=72.8825627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();
            // console.log(json);
            // optional chaining
            setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        if(listOfRestaurant.length === 0){
            return <Shimmer/>
        }


    // return listOfRestaurant.length === 0 ? (
    //     <Shimmer/>
    // ) : 
    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">

                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filterList);
                }}>Top Rated Restaurants</button>



                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                        }}
                    />

                    <button className="search-btn" onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((res) => 
                            // (res) => res.info.name.toLowerCase().include(searchText.toLowerCase())
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                
                {/* <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filterList);
                }}>Top Rated Restaurants</button> */}
            </div>  
            <div className="res-container">
            {
              filteredRestaurant.map((restaurant) => (
              <Link className="card-data" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id }><RestaurantCard resData={restaurant}/></Link>
              ))
            }
            </div>   
        </div> 
    );
};

export default Body;