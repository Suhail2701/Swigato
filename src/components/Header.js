import { LOGO_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logoImg from "../../public/foodLogo.png"

const Header = () => {

    const [btnName, setbtnName] = useState("LogIn");
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    
    //Subscribing to store using selctor hook
    const cartQuantity = useSelector((store)=>{ return store.cart.totalQuantity});
    // console.log(cartItems);

    return (
        <div className="flex justify-between p-2   shadow-lg px-6">
            <div className="logo-container">
                <img className="w-36" src={logoImg} />
            </div>

            <div className="flex items-center ">
                <ul className="flex  text-2xl px-3 text-slate-700  hover:text-slate-900">
                    {/* <li className="px-3">Online Status: {onlineStatus?"🟢":"🔴"}</li> */}
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    {/* <li className="px-3"><Link to="/grocery">Grocery</Link></li> */}
                    <li className="px-3"><Link to="/cart">Cart ({cartQuantity} items)</Link></li>
                    <button className="px-3" onClick={() => {
                        if (btnName === "LogIn") {
                            setbtnName("LogOut");
                        }
                        else {
                            setbtnName("LogIn");
                        }
                        console.log(btnName);
                    }

                    }>{btnName}</button>
                    {/* <li className="px-3"><Link to="/grocery">{loggedInUser}</Link></li> */}
                </ul>
            </div>
        </div>
    );
}

export default Header;
