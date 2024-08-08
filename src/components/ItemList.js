import { useDispatch } from "react-redux";
import { CART_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import AddButton from "./AddButton";
// import { Toaster } from "sonner";

const ItemList = ({ item, items }) => {
    console.log(item);

    return (
        <div>
            {item ? (
                    <div key={item?.card?.info?.id} className="py-2 px-4 m-2 border-gray-300 border-b-2 text-left flex justify-between bg-yellow-100 rounded-lg ">
                        <div className="w-9/12 mt-8 ml-1 pr-5">
                            <div className="pb-2 ">
                                <span className="font-bold text-xl">{item?.card?.info?.name}</span>
                                <span>
                                    - ₹
                                    {item?.card?.info?.defaultPrice
                                        ? item?.card?.info?.defaultPrice / 100
                                        : item?.card?.info?.price / 100}
                                </span>
                            </div>
                            <div>
                                <p className="text-lg">
                                    {item?.card?.info?.description}
                                </p>
                            </div>
                        </div>

                        <div className="w-3/12 pl-10 pb-3 ">
                            {/* <button className="absolute bg-black text-white rounded-lg p-2" onClick={() => handleAddItem(item)}>
                                Add +
                            </button> */}
                            
                            <AddButton itemData={item} items={items} key={item?.card?.info?.id} />
                            {/* <img src={CART_URL + item?.card?.info?.imageId} className="h-44 w-full  rounded-lg" /> */}
                        </div>
                    </div>
               
            ) : (
                <div>No items available</div>
            )}
        </div>
    );
};

export default ItemList;
