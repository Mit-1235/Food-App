import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="web-logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="header-btn" to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="header-btn" to={"/Product"}>Product</Link>
                    </li>
                    <li>
                        <Link className="header-btn" to={"/About"}>About US</Link>
                    </li>
                    <li>
                        <Link className="header-btn" to={"/Contact"}>Contact US</Link>
                    </li>
                    <li><img className="cart" alt="cart" src={CART_LOGO_URL}></img></li>
                    <li><button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;