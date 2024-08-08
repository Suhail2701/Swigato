import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from './components/Header';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const App = () => {

    return (
        <Provider store={appStore}>
            <div>
                <Header />
                <Outlet />
                <ToastContainer />
            </div>
        </Provider>
    );
};

export default App;