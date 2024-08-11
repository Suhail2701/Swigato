import LoginBg from "../../public/LoginBg.png";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { toast, Slide, Zoom, Flip, Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import LoginBg2 from "../../public/LogoBg2.png"


const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const darkMode = useSelector((store) => store.darkMode);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleHandler = () => {
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = () => {

        //Validate the form data
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message)

        //if email/password is not valid then return from here only not move further
        if (message) return;

        //Sign Up and Sign In Logic
        if (!isSignIn) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://eskipaper.com/images/yellow-angry-bird-1.jpg"
                    }).then(() => {
                        //dispatching "addUser" once again so that "displayName" and "photoURL" get updated in redux store
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        }))

                        //Notification
                        toast.success("You have successfully signed up.", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                            progress: undefined,
                            transition: Slide,
                        })
                        // navigate("/list");
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        }
        else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);


                    //Notification
                    toast.success("You have successfully logged in.", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        progress: undefined,
                        transition: Slide,
                    })

                    // navigate("/list");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }


    }
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className=" relative dark:bg-c2   ">
                <div className="w-5/12 sm:w-8/12  xs:w-10/12 md:w-6/12 lg:w-4/12 absolute  border border-solid border-yellow-400 mx-auto text-center dark:border-white top-[20%] left-[35%] xs:left-[9%] xs:top-[15%] sm:left-[16%] md:left-[25%] md:top-[15%] lg:left-[34%] p-4 text-2xl xs:text-lg sm:text-2xl  z-10 rounded-xl bg-black bg-opacity-10 shadow-xl">
                    <h1 className="font-bold text-3xl p-4 dark:text-white">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    <form className="w-10/12 xs:w-full md:w-9/12 mx-auto text-gray-900" onSubmit={(e) => e.preventDefault()}>
                        {!isSignIn && <input type="text" placeholder="Full Name" ref={name} className="border border-solid border-black w-full p-2 my-4 bg-transparent rounded-xl dark:text-white dark:border-white" />}
                        <input type="email" placeholder="email" ref={email} className="border border-solid border-black w-full p-2 my-4 bg-transparent rounded-xl dark:text-white dark:border-white " />
                        <input type="password" placeholder="password" ref={password} className="border border-solid border-black w-full p-2 my-4 bg-transparent rounded-xl dark:text-white dark:border-white" />
                        <p className=" text-red-600 text-lg">{errMessage}</p>
                        <button className="border border-solid border-black p-2 my-4 rounded-lg bg-yellow-400 hover:bg-white hover:text-yellow-500 text-lg font-bold dark:border-white"
                            onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                        <p onClick={toggleHandler} className="cursor-pointer hover:text-yellow-500 my-4 text-lg dark:text-white">
                            {isSignIn ? "New to Swigato? Sign Up Now" : "Already redistered? Sign In now.."}
                        </p>
                    </form>
                </div>
                <img src={darkMode ? LoginBg2 : LoginBg} alt="Login BackGround" className=" opacity-20 h-screen w-screen object-cover" />
            </div>
        </div>
    )
}

export default Login;