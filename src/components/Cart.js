import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => { return store.cart.items });
    const darkMode = useSelector((store) => store.darkMode)

    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        return dispatch(clearCart());
    }
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="min-h-screen dark:bg-c2">
                <div className="w-6/12 text-center mx-auto py-6 p-4 xs:w-10/12 xs:px-2 sm:w-10/12 md:w-10/12 lg:w-7/12">
                    <h1 className="font-bold text-[40px] dark:text-c3 xs:text-2xl">Cart</h1>
                    <button className="bg-black text-white p-2 rounded-lg my-3 text-xl xs:text-lg  hover:text-yellow-400 dark:bg-customBlue2 dark:hover:text-black" onClick={() => handleClearCart()}>
                        Clear Cart
                    </button>
                    {cartItems.length === 0 && <h1 className="text-2xl mt-20 dark:text-gray-500">Your Cart is Empty. Please Add Items to it.</h1>}
                    {cartItems.map((item) => {
                        return (
                            <ItemList key={item?.card?.info?.id} item={item.item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Cart;
