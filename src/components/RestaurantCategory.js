import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, title }) => {
    console.log(data);

    // const [showItems, setShowItems] = useState(false);
    const arrow = showItems ? "🔼" : "🔽";
    const handleClick = () => {
        setShowIndex()
    }


    return (
        <div>
            {/* {Accordian Header} */}
            <div className="  w-6/12 shadow-lg my-4 py-2 px-4 mx-auto bg-yellow-200 rounded-md"     >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold  text-2xl">{title} ({data?.length})</span>
                    <span>{arrow}</span>
                </div>

                {/* {Accordian Body} */}
                {showItems && (data && data.length > 0 ? (data.map((dataItem) => <ItemList key={dataItem.card?.info?.id} item={dataItem} items={data} />)) : (
                    <div>No items available</div>
                ))}
            </div>

        </div>
    )

}
export default RestaurantCategory;