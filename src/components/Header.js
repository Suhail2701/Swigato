import { LOGO_URL } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch, useSelector } from "react-redux";
import logoImg from "../../public/foodLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import { toggleMode } from "../utils/darkModeSlice";
import logoImg2 from "../../public/foodLogo2.png";
import lightMode from "../../public/light.png";
import DarkMode from "../../public/dark-mode.png";



const Header = () => {

    const [btnName, setbtnName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const LoginUser = useSelector((store) => store.user);

    const darkModeState = useSelector((store) => store.darkMode);




    //Subscribing to store using selctor hook
    const cartQuantity = useSelector((store) => { return store.cart.totalQuantity });
    // console.log(cartItems);

    const handleSgnOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());

            //Notification
            toast.error("You have Signed Out Successfully.", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                progress: undefined,
                transition: Slide,
            })

            // navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    //on auth change basically to get the currently signed in user and store it in redux
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;

                //when ever user signUp/signIn this api is called and this action is dispatched
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                }))

                navigate("/list");

            } else {

                dispatch(removeUser());
                navigate("/");
            }
        });

        //clean up function which basically unSubscribe the "onAuthStateChanged" from header and this "onAuthStateChanged" api returns that clean up function
        return () => unSubscribe();
    }, []);


    //darkMode
    const handleDarkMode = () => {
        dispatch(toggleMode());
    }




    return (
        <div className={`${darkModeState && "dark"}`}>
            <div className={`flex justify-between p-2 shadow-lg px-6 dark:bg-c1 xs:px-3  xs:items-center xs:justify-center ${LoginUser ?'xs:flex-col':'xs:flex-row'} ${!LoginUser && 'xs:justify-between'}`}>
                <div className="logo-container">
                    <img className="w-36 xs:w-16 sm:w-28 md:w-36" src={darkModeState ? logoImg2 : logoImg} />
                </div>

                <div className="flex items-center ">
                    <ul className="flex  text-2xl px-3 xs:px-[2px] xs:text-[15px] sm:text-[20px] md:text-2xl text-slate-700  hover:text-slate-900 xs:leading-4 items-center xs:justify-around xs:mt-2 xs:mb-2">
                        {/* <li className="px-3">Online Status: {onlineStatus?"🟢":"🔴"}</li> */}
                        {/* {LoginUser &&<li><Link to="/gpt">GPT</Link></li>} */}
                        {LoginUser && <li className="px-3 xs:px-[5px] sm:px-[8px] md:px-3 dark:text-white "><Link to="/list">Home</Link></li>}
                        {LoginUser && <li className="px-3 xs:px-[5px] sm:px-[8px] md:px-3 dark:text-white "><Link to="/about">About</Link></li>}
                        {LoginUser && <li className="px-3 xs:px-[5px] sm:px-[8px] md:px-3 dark:text-white "><Link to="/contact">Contact</Link></li>}
                        {/* <li className="px-3"><Link to="/grocery">Grocery</Link></li> */}
                        {LoginUser && <li className="px-3 xs:pl-[5px] xs:pr-[1px] sm:px-[8px] md:px-3 dark:text-white "><Link to="/cart">Cart {cartQuantity === 0 ? <span className=" mx-1 px-[2px] border  border-black border-t-2 dark:border-white">{cartQuantity}</span> : <span className=" mx-1 px-1  bg-green-400 border  border-black border-t-2">{cartQuantity}</span>}</Link></li>}
                        {LoginUser && <li className="px-3  xs:px-[5px] relative  sm:px-[8px] md:px-3 group cursor-pointer">

                            <img className="w-10 h-10 rounded-full xs:w-7 xs:h-7" src="https://eskipaper.com/images/yellow-angry-bird-1.jpg" />


                            {/* Hover section */}
                            <div className="absolute top-10 right-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64 z-20 hidden group-hover:block dark:bg-c2">
                                <div className="flex flex-col items-center">
                                    <img src="https://eskipaper.com/images/yellow-angry-bird-1.jpg" alt="img" className="w-20 h-20 rounded-full mb-2 object-cover" />
                                    <p className="text-lg font-semibold dark:text-c3">{LoginUser?.displayName || "User Name"} </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{LoginUser?.email || "user@example.com"}</p>
                                    <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg text-xl hover:text-yellow-500"
                                        onClick={handleSgnOut}>Sign Out</button>

                                </div>
                            </div>
                        </li>}
                        {/* <button className="px-3 dark:text-customWhite" onClick={() => {
                        if (btnName === "LogIn") {
                            setbtnName("LogOut");
                        }
                        else {
                            setbtnName("LogIn");
                        }
                        console.log(btnName);
                    }

                    }>{btnName}</button> */}
                        {/* <li className="px-3"><Link to="/grocery">{loggedInUser}</Link></li> */}


                        <button className="w-11 h-11 xs:w-7 xs:h-7" onClick={handleDarkMode}>
                            {darkModeState ? <img className=" " src={lightMode} alt="light_mode"/> : <img className="" src={DarkMode} alt="dark_mode"/>}
                        </button>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
