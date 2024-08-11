import { TypeAnimation } from "react-type-animation";
import { LogIn, UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import dash1 from "../../public/dash1.png";
import dash2 from "../../public/dash2.png";
import dash3 from "../../public/dash3.png";
import dash4 from "../../public/dash4.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashBoard = () => {

    const [count, setCount] = useState(0);

    const imageMap = [dash1, dash2, dash3, dash4];

    const navigate = useNavigate();

    const darkModeState = useSelector((store) => store.darkMode);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(preValue => (preValue + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${darkModeState && "dark"} ` }>
            <div className="  p-4 dark:bg-c2 min-h-screen ">
                <div className="flex flex-col md:flex-row justify-between  md:mt-[73px] ">
                    <div className=" flex justify-center  md:w-8/12  flex-col">
                        <div className=" text-center ">
                            <div className="text-5xl md:text-8xl font-bold  my-4 p-2 dark:text-white "> We <span className="text-yellow-500 dark:text-customBlue2"> Teleport </span> Food.</div>
                            <div className="text-4xl md:text-7xl text-gray-500 my-4 p-2 xs:text-4xl "><span>Don't ask how</span></div>
                            <div className="my-4 p-2 ">
                                <TypeAnimation
                                    sequence={[" Order Now!", 1000, ""]}    
                                    speed={10}
                                    cursor={true}
                                    repeat={Infinity}
                                    className=" text-3xl md:text-6xl text-yellow-500 whitespace-break-spaces  dark:text-white "
                                />
                            </div>
                            <div className="my-8 p-2 flex justify-center">
                                <button className=" border border-solid border-black  flex  items-center p-2 mr-5 rounded-lg bg-yellow-300 hover:bg-yellow-500 dark:bg-customBlue2  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" onClick={() => {
                                    navigate("/Login")
                                }

                                }>
                                    <LogIn className="w-4 h-4 mr-2" />
                                    <span className="text-xl px-2">Login</span>
                                </button>
                                <button className="border border-solid border-black  flex  items-center p-2 rounded-lg bg-green-300 hover:bg-green-500 dark:bg-customBlue2  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" onClick={() => {
                                    navigate("/Login")
                                }}>
                                    <UserPlus className="w-4 h-4 mr-2" />
                                    <span className="text-xl">Singn Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12   flex justify-center items-center ">
                        <img src={imageMap[count]} alt="Images"
                            className="max-h-[250px] md:max-h-[400px]" />
                    </div>
                </div>
                <div className=" mt-5 md:mt-36 flex justify-center items-center p-4   text-yellow-500 text-xl dark:text-white ">
                    Created by Suhail Ahmed {!darkModeState ? "💛" : "🤍"}
                </div>
            </div>
        </div>
    )
}

export default DashBoard;