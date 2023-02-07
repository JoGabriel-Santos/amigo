import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CatImages from "./pages/CatImages";
import Collaborators from "./pages/Collaborators";
import Visit from "./pages/Visit";
import ConfirmVisit from "./pages/ConfirmVisit";
import Footer from "./components/Footer";

import "./util/styles/general.css";
import "./util/styles/queries.css";
import "./util/styles/style.css";

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Authentication}/>
                <Route path="/signup" exact component={Authentication}/>
                <Route path="/cats" exact component={CatImages}/>
                <Route path="/collaborators" exact component={Collaborators}/>
                <Route path="/visit" exact component={Visit}/>
                <Route path="/confirm" exact component={ConfirmVisit}/>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;