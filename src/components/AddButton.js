import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CART_URL } from "../utils/constants";
import {  toast, Slide, Zoom, Flip, Bounce } from "react-toastify";


const AddButton = ({ itemData, items }) => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const addItemHandler = (itemData, items) => {
        dispatch(addItem({ itemData, items }));
        toast.success("Item added in your cart.",{
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            progress: undefined,
            transition: Slide,
        });
    }

    const removeItemHandler = (itemData, items) => {
        dispatch(removeItem({ itemData, items }));
        toast.error("Item removed from your cart.",{
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            progress: undefined,
            transition: Slide,
        })
    }

    const itemExists = cartItems.find((item) => item.id === itemData?.card?.info?.id);
    const existingItmIndex = cartItems.findIndex((itemIndex) => itemIndex.id === itemData?.card?.info?.id);


    return (
        <div className="relative">
            <img src={CART_URL + itemData?.card?.info?.imageId} className="h-44 w-full  rounded-lg mt-5 xs:h-20 object-cover sm:h-20 md:h-24 lg:h-24 xl:h-44 xl:w-full" />
            {/* <Toaster richColors /> */}
            <div className="absolute flex items-center justify-center text-white bg-gray-800 p-1 rounded-md left-[40%] bottom-0   xs:left-[36%] md:left-[38%] lg:left-[40%] xs:p-0  sm:left-[32%] sm:p-0 xl:p-1 ">
                {!itemExists ? (
                    <div>
                        <button className="px-2 text-lg xs:text-[10px]  xs:px-1 sm:text-[10px] sm:px-1 xl:text-lg xl:px-2 hover:text-yellow-400" onClick={() => addItemHandler(itemData, items)}>
                            ADD
                        </button>
                    </div>
                ) : (<div >
                    <button className="px-2 text-lg xs:text-[10px]  xs:px-1 sm:text-[10px] sm:px-1 xl:text-lg hover:text-yellow-400" onClick={() => removeItemHandler(itemData, items)}>
                        -
                    </button>
                    <span >
                        {cartItems[existingItmIndex]?.count}
                    </span>

                    <button className="px-2 text-lg xs:text-[10px]  xs:px-1 sm:text-[10px] sm:px-1 xl:text-lg hover:text-yellow-400" onClick={() => addItemHandler(itemData, items)}>
                        +
                    </button>
                </div>)
                }
            </div>
          
        </div>
    )
}


export default AddButton;