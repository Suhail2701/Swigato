import RestaurantCard, { withPromtedLable } from "./RestaurantCard";
// import { resList } from "../utils/mockData"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { NO_RESULT_IMG } from "../utils/constants";
import noResultImg from "../../public/noresult.jpg";
import { isMobile } from "react-device-detect";
import { PROXY_URL } from "../utils/constants";
import { useSelector } from "react-redux";




const Body = () => {

    const [resList1, setResList] = useState([]);

    const [filterdList, setfilteredList] = useState([]);

    const [searchBtn, setsearchBtn] = useState("");

    const { setUserName, loggedInUser } = useContext(UserContext);

    const darkMode = useSelector((store) => store.darkMode)


    //Higher Order Component 
    const RestaurantCardPromoted = withPromtedLable(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const data = await fetch(PROXY_URL + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json);
            // setResList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            // setfilteredList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            //json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            const restaurantsList = isMobile ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] : json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];


            // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(restaurantsList);
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
        <div className={`${darkMode && "dark"} `}>
            <div className="min-h-screen w-full dark:bg-c2">
                <div className="w-10/12  mx-auto xs:w-[98%] sm:w-[98%] md:w-10/12 lg:w-11/12 xl:w-11/12 ">
                    <div className="flex  justify-between mb-5 pt-5 xs:flex-col xs:items-center ">
                        <div className="m-4  xs:w-full xs:px-2">
                            <input type="text" className="border-2 border-solid border-gray-300 p-3 pr-12 text-xl rounded-3xl bg-gray-100 xs:text-sm xs:p-2 xs:w-full sm:text-lg md:text-xl sm:p-2 md:p-3  dark:bg-c4 dark:text-gray-400 dark:border-gray-400" placeholder="Search for Restaurants..." value={searchBtn} onChange={handleSearchChange} />
                        </div>

                        <div className="flex items-center xs:flex-col">
                            <button
                                className=" p-3 m-2 bg-gray-200 hover:bg-gray-300 rounded-md text-xl shadow-sm xs:text-sm xs:p-2 sm:text-lg sm:p-2 md:text-xl md:p-3  dark:bg-c4 dark:text-gray-400 dark:border-gray-400"
                                onClick={() => {
                                    const filterd = resList1.filter(
                                        (res) => res.info.avgRating >= 4.5
                                    );
                                    setfilteredList(filterd);
                                }} >
                                Top Rated Restaurant
                            </button>
                            <button
                                className=" p-3 m-2 bg-gray-200 hover:bg-gray-300 rounded-md text-xl  shadow-sm xs:text-sm xs:p-2 sm:text-lg sm:p-2 md:text-xl md:p-3  dark:bg-c4 dark:text-gray-400 dark:border-gray-400"
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
            </div>
        </div>
    );
}


export default Body;
