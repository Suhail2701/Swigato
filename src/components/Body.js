import RestaurantCard, { withPromtedLable } from "./RestaurantCard";
// import { resList } from "../utils/mockData"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { NO_RESULT_IMG } from "../utils/constants";
import noResultImg from "../../public/noresult.jpg";




const Body = () => {

    const [resList1, setResList] = useState([]);

    const [filterdList, setfilteredList] = useState([]);

    const [searchBtn, setsearchBtn] = useState("");

    const { setUserName, loggedInUser } = useContext(UserContext);


    //Higher Order Component 
    const RestaurantCardPromoted = withPromtedLable(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            // console.log(json);
            // setResList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            // setfilteredList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            //json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            const restaurantsList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setResList(restaurantsList);
            setfilteredList(restaurantsList);
        } catch (err) {
            console.log("Fetch Failed!!");
        }

    }

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setsearchBtn(searchValue);

        if (searchValue === "") {
            setfilteredList(resList1);
        } else {
            const filteredRes = resList1.filter((res1) => {
                return res1.info.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            console.log(filteredRes);
            console.log(filteredRes.length);
            setfilteredList(filteredRes);
        }
    }

    const onlineStatus = useOnlineStatus();

    // if(onlineStatus === false)
    //     {
    //         return (<h1>Some Thing Wrong with your Internent Connection</h1>);
    //     }

    //Conditional Rendering --> Rendering on the basis of condition is called conditional Rendering
    if (resList1.length === 0) {
        return <Shimmer />
    }
    console.log(filterdList);
    return (
        <div className="w-10/12  mx-auto ">
            <div className="flex  justify-between my-5">
                <div className="m-4">
                    <input type="text" className="border-2 border-solid border-gray-300 p-3 pr-12 text-xl rounded-3xl bg-gray-100 " placeholder="Search for Restaurants..." value={searchBtn} onChange={handleSearchChange} />
                </div>

                <div className="flex items-center">
                    <button
                        className=" p-3 m-2 bg-gray-200 hover:bg-gray-300 rounded-md text-xl shadow-sm "
                        onClick={() => {
                            const filterd = resList1.filter(
                                (res) => res.info.avgRating >= 4.5
                            );
                            setfilteredList(filterd);
                        }} >
                        Top Rated Restaurant
                    </button>
                    <button
                        className=" p-3 m-2 bg-gray-200 hover:bg-gray-300 rounded-md text-xl  shadow-sm"
                        onClick={() => {
                            setfilteredList(resList1);
                            setsearchBtn("");
                        }} >
                        Reset
                    </button>
                </div>
                {/* <div className="flex items-center">
                    <label>User Name:</label>
                    <input className="border border-black p-1 ml-3" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div> */}
            </div>

            <div className="flex flex-wrap max-lg:mx-auto max-smx:mx-auto justify-center items-center h-100% w-100%">
                {
                    filterdList.length === 0 ? (<div className="w-4/12 mx-auto ">
                        <img src={noResultImg} alt="No Results" className="flex justify-center items-center w-full " />
                    </div>) : (filterdList.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                            {
                                restaurant.info.isOpen ? <RestaurantCardPromoted resList={restaurant} /> : <RestaurantCard resList={restaurant} />
                            }
                        </Link>)))
                }

            </div>
        </div>
    );
}


export default Body;