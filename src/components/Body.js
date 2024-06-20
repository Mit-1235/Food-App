import RestaurantCard from "./RestaurantCard";
import FoodCarousel from "./FoodCarousel";
// import resList from "../utils/mockData";
// delete mockData.js file
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ShimmerSecond from "./ShimmerSecond";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import TopRestaurantCarousel from "./TopRestaurantCarousel";

// Normal JS Variable
const Body = () => {
  // Local State Variable - (Supar Powerfull React Variable)
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [page, setPage] = useState(9);
  // const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2182455&lng=72.8825627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   // console.log(json);
  //   // optional chaining
  //   setListOfRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  useEffect(() => {
    infiniteData();
    // setLoading(false);
  }, []);

  const infiniteData = async () => {
    const newData = await axios({
      method: "post",
      url: "https://react-backend-q22o.onrender.com/api/forward-request",
      // url: 'http://localhost:5000/api/forward-request',
      data: {
        lat: "21.18880",
        lng: "72.82930",
        nextOffset: "CJhlELQ4KIDQ0JfR8P2lJTCnEzgB",
        widgetOffset: {
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_PB_Theme: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
            page < 10 ? "0" + page : page.toString(),
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
        },
        page_type: "DESKTOP_WEB_LISTING",
        _csrf: "s814UsIJInkO-4eTYLrfc1tOzNP3h9j43UtVZB9Q",
      },
    });

    // console.log(newData);
    const responseJson = newData;
    // console.log(responseJson);
    setListOfRestaurant((prev) => [
      ...prev,
      ...responseJson?.data?.data?.cards[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants,
    ]);
    setFilteredRestaurant((prev) => [
      ...prev,
      ...responseJson?.data?.data?.cards[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants,
    ]);
    // console.log("function called! ");
    setPage((prev) => prev + 15);
  };

  // const handleScroll = () => {
  // console.log("height:", document.documentElement.scrollHeight);
  // console.log("top:", document.documentElement.scrollTop);
  // console.log("window:", window.innerHeight);

  // if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
  // console.log('condition true')
  //     setLoading(true);
  //     setPage(prev => prev + 15);
  //   }

  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll",handleScroll);
  // }, [])

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Oops!! look like you are offline. Please check your internet.</h1>
    );

  // if (listOfRestaurant.length === 0) {
  //   return <ShimmerSecond />;
  // }

  return (
    <div className="body mt-20 ">
      <div className="flex justify-center w-[100%]">
        <div className="flex justify-center w-[100%] ">
          <FoodCarousel />
        </div>
      </div>
      <div className="flex justify-center w-[100%] ">
        <div className="flex justify-center w-[100%] ">
          <TopRestaurantCarousel />
        </div>
      </div>
      <div className="filter flex justify-around p-6">
        <button
          className="filter-btn border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurant(filterList);
          }}
        >
          Ratings 4.1+
        </button>
        <div className="search">
          <input
            placeholder="Search"
            type="text"
            className="search-box mx-2 border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

      </div>
      <InfiniteScroll
        dataLength={filteredRestaurant.length}
        next={infiniteData}
        hasMore={true}
        loader={<ShimmerSecond />}
      >
        <div className="flex justify-center ">
          <div className="res-container flex flex-wrap justify-center w-[90%] ">
            {filteredRestaurant.map((restaurant) => (
              <Link
                className="card-data"
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;

// import RestaurantCard from "./RestaurantCard";
// // import resList from "../utils/mockData";
// // delete mockData.js file
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import axios from "axios";
// import InfiniteScroll from 'react-infinite-scroll-component';

// // Normal JS Variable
// const Body = () => {
//   // Local State Variable - (Supar Powerfull React Variable)
//   const [listOfRestaurant, setListOfRestaurant] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [page, setPage] = useState(9);

//   const [searchText, setSearchText] = useState();

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const fetchData = async () => {
//   //   const data = await fetch(
//   //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2182455&lng=72.8825627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   //   );

//   //   const json = await data.json();
//   //   // console.log(json);
//   //   // optional chaining
//   //   setListOfRestaurant(
//   //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   //   );
//   //   setFilteredRestaurant(
//   //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   //   );
//   // };

//   useEffect(() => {
//     infiniteData();
//     // setPage(prev => prev+15)
//   }, []);

//   const infiniteData = async () => {

//     const newData= await axios({
//       method: 'post',
//       url: 'https://react-backend-q22o.onrender.com/api/forward-request',
//       data: {"lat":"21.18880","lng":"72.82930","nextOffset":"CJhlELQ4KIDQ0JfR8P2lJTCnEzgB","widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":page<10 ? "0"+page : page.toString(),"inlineFacetFilter":"","restaurantCountWidget":""},"filters":{},"seoParams":{"seoUrl":"https://www.swiggy.com/","pageType":"FOOD_HOMEPAGE","apiName":"FoodHomePage"},"page_type":"DESKTOP_WEB_LISTING","_csrf":"s814UsIJInkO-4eTYLrfc1tOzNP3h9j43UtVZB9Q"},
//     });

//     // console.log(newData);
//     const responseJson = newData;
//     console.log(responseJson);
//     setListOfRestaurant((prev) =>
//       [...prev, ...responseJson?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants]
//     );
//     setFilteredRestaurant((prev) =>
//       [...prev, ...responseJson?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants]
//     );
//     console.log('function called')
//     setPage(prev => prev+15)
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1>Oops!! look like you are offline. Please check your internet.</h1>
//     );

//   if (listOfRestaurant.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <div className="body mt-24">
//       {/* <div className="search">Search</div> */}
//       <div className="filter flex justify-around p-6">
//         <button
//           className="filter-btn border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
//           onClick={() => {
//             const filterList = listOfRestaurant.filter(
//               (res) => res.info.avgRating > 4.1
//             );
//             setFilteredRestaurant(filterList);
//           }}
//         >
//           Ratings 4.1+
//         </button>

//         <div className="search">
//           <input
//             placeholder="Search"
//             type="text"
//             className="search-box mx-2 border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />

//           <button
//             className="search-btn border-[1px] border-gray-300 px-4 py-2 rounded-full text-sm shadow-md shadow-slate-300"
//             onClick={() => {
//               console.log(searchText);
//               const filteredRestaurant = listOfRestaurant.filter((res) =>
//                 // (res) => res.info.name.toLowerCase().include(searchText.toLowerCase())
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       <InfiniteScroll
//       dataLength={filteredRestaurant.length}
//       next={infiniteData}
//       hasMore={true}
//       loader={<Shimmer />}>
//       <div className="flex justify-center ">
//         <div className="res-container flex flex-wrap justify-center w-[90%] ">
//           {filteredRestaurant.map((restaurant) => (
//             <Link
//               className="card-data"
//               key={restaurant.info.id}
//               to={"/restaurant/" + restaurant.info.id}
//             >
//               <RestaurantCard resData={restaurant} />
//             </Link>

//           ))}
//         </div>
//       </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Body;
