import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-[100%] py-10 mt-16">
      {/* <h1 className="">Cart</h1> */}
      <div className="flex justify-around">
        {cartItems.length >= 1 && (<button
          className=" w-[120px] h-[40px] p-2 m-2 rounded-lg text-md font-semibold bg-red-600 text-white "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>)}
      </div>
      <div className="flex justify-center align-middle w-[60%] m-auto">
        {cartItems.length === 0 && (
          <div className="w-[280px]">
            <img className="w-[300px] mt-3 mb-8" src="https://shidory.com/assets/images/empty_cart.webp"></img>
            <h1 className="text-center text-4xl font-bold text-gray-400 ">Cart Empty</h1>
            <p className="mt-2 text-lg text-gray-400">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
