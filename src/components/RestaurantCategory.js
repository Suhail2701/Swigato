import ItemList from "./ItemList";
import { useState } from "react";
import { useSelector } from "react-redux"; { }

const RestaurantCategory = ({ data, showItems, setShowIndex, title }) => {
    console.log(data);

    const darkMode = useSelector((store) => store.darkMode);

    // const [showItems, setShowItems] = useState(false);
    const arrow = showItems ? "🔼" : "🔽";
    const handleClick = () => {
        setShowIndex()
    }


    return (
        <div className={`${darkMode && "dark"}`}>
            <div >
                {/* {Accordian Header} */}
                <div className="  w-6/12 shadow-lg my-4 py-2 px-4 mx-auto bg-yellow-200 dark:bg-c4   rounded-md  xs:w-10/12 xs:px-2 sm:w-10/12 md:w-10/12 lg:w-7/12"     >
                    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                        <span className="font-bold  text-2xl xs:text-lg sm:text-xl md:text-2xl dark:text-c3">{title} ({data?.length})</span>
                        <span>{arrow}</span>
                    </div>

                    {/* {Accordian Body} */}
                    {showItems && (data && data.length > 0 ? (data.map((dataItem) => <ItemList key={dataItem.card?.info?.id} item={dataItem} items={data} />)) : (
                        <div>No items available</div>
                    ))}
                </div>

            </div>
        </div>
    )

}
export default RestaurantCategory;