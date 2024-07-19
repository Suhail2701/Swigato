import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from './components/Header';

const App = () => {

    return (
        <Provider store={appStore}>
            <div>
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

export default App;