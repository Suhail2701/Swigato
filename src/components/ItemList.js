import { useDispatch } from "react-redux";
import { CART_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";


const ItemList = ({ item, items }) => {
    console.log(item);

    const darkMode = useSelector((store)=>store.darkMode);

    return (
        <div className={`${darkMode && "dark"}`}>
            {item ? (
                    <div key={item?.card?.info?.id} className="py-2 px-4 m-2 border-gray-300 border-b-2 text-left flex justify-between bg-yellow-100 dark:bg-c5 rounded-lg items-center ">
                        <div className="w-9/12 mt-8 ml-1 pr-5 xs:mt-3 xs:mb-3 sm:mt-3 sm:mb-3 md:mt-8">
                            <div className="pb-2 ">
                                <span className="font-bold text-xl xs:text-sm sm:text-lg xs:leading-3 sm:leading-3 md:text-xl xl:text-2xl dark:text-c3 ">{item?.card?.info?.name}</span>
                                <span className="xs:text-sm sm:text-sm md:text-lg xl:text-xl dark:text-gray-500">
                                    - ₹
                                    {item?.card?.info?.defaultPrice
                                        ? item?.card?.info?.defaultPrice / 100
                                        : item?.card?.info?.price / 100}
                                </span>
                            </div>
                            <div>
                                <p className="text-lg xs:text-[10px] sm:text-[12px] md:text-sm leading-4 xl:text-lg dark:text-c3">
                                    {item?.card?.info?.description}
                                </p>
                            </div>
                        </div>

                        <div className="w-3/12 pl-10 pb-3  xs:w-5/12 xs:pl-3 ">
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
