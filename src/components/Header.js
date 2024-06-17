import React from "react";
import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL, USER_IMG, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // selector
  // subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className=" z-[1] bg-white fixed top-0 w-[100%] flex justify-between items-center h-[85px] shadow-sm">
      <div className="logo-container">
        <Link className="header-btn w-[92px] flex justify-center" to={"/"}>
          <img
            className="w-9 mx-7 my-4 hover:w-10 transition-all duration-200 ease-linear"
            alt="web-logo"
            src={LOGO_URL}
          ></img>
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center p-5 font-medium text-[15px]">
          <li className="px-4 mx-2">
            <p>Online Status : {onlineStatus ? "🟢" : "🔴"}</p>
          </li>
          {/* <li className="px-4 mx-2 hover:text-orange-400">
                        <Link className="header-btn" to={"/"}>Home</Link>
                    </li> */}
          {/* <li className="px-4 mx-2 hover:text-orange-400">
            <Link className="header-btn" to={"/Product"}>
              Product
            </Link>
          </li> */}
          <li className="px-4 mx-2 hover:text-orange-400">
            <Link className="header-btn" to={"/About"}>
              About US
            </Link>
          </li>
          <li className="px-4 mx-2 hover:text-orange-400">
            <Link className="header-btn" to={"/Contact"}>
              Contact US
            </Link>
          </li>
          <li className="px-4 mx-2 hover:text-orange-400">
            <Link className="header-btn" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li className="px-4 mx-2 hover:text-orange-400 ">
            <button
              className="flex w-[74px] justify-between"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
              <img
                className="w-[14px] mt-1 ml-2 "
                src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
              ></img>
            </button>
          </li>
          <li className="px-4  mx-2 hover:text-orange-400">
            <Link className="header-btn" to={"/cart"}>
              Cart ({cartItems.length})
            </Link>
            {/* <img className="w-7" alt="cart" src={CART_LOGO_URL}></img>({cartItems.length} items) */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
