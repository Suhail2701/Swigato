import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CART_URL } from "../utils/constants";
import {ToastContainer, toast} from "react-toastify";

const AddButton = ({ itemData, items }) => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const addItemHandler = (itemData, items) => {
        dispatch(addItem({ itemData, items }));
        toast.success("Item added in your cart.",{
            duration:2000,
        });
    }

    const removeItemHandler = (itemData, items) => {
        dispatch(removeItem({ itemData, items }));
    }

    const itemExists = cartItems.find((item) => item.id === itemData?.card?.info?.id);
    const existingItmIndex = cartItems.findIndex((itemIndex) => itemIndex.id === itemData?.card?.info?.id);


    return (
        <div className="relative">
            <img src={CART_URL + itemData?.card?.info?.imageId} className="h-44 w-full  rounded-lg mt-5" />
            <div className="absolute flex items-center justify-center text-white bg-gray-800 p-1 rounded-md left-[40%] bottom-0 ">
                {!itemExists ? (
                    <div>
                        <button className="px-2 text-lg hover:text-yellow-400" onClick={() => addItemHandler(itemData, items)}>
                            ADD
                        </button>
                    </div>
                ) : (<div >
                    <button className="px-2 text-lg hover:text-yellow-400" onClick={() => removeItemHandler(itemData, items)}>
                        -
                    </button>
                    <span >
                        {cartItems[existingItmIndex]?.count}
                    </span>

                    <button className="px-2 text-lg hover:text-yellow-400" onClick={() => addItemHandler(itemData, items)}>
                        +
                    </button>
                </div>)
                }
            </div>
          
        </div>
    )
}


export default AddButton;