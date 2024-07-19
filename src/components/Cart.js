import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>
{  
    const cartItems = useSelector((store)=>{return store.cart.items});

    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        return dispatch(clearCart());
    }
    return(
        <div className="w-6/12 text-center mx-auto my-6 p-4">
            <h1 className="font-bold text-[40px] ">Cart</h1>
            <button className="bg-black text-white p-2 rounded-lg my-3 text-xl hover:text-yellow-400" onClick={()=>handleClearCart()}> 
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="text-2xl mt-20">Your Cart is Empty. Please Add Items to it.</h1>}
            {cartItems.map((item)=>{
                return (
                   <ItemList key={item?.card?.info?.id} item={item.item}/>
                )
            })}
            
        </div>
    )
}

export default Cart;