import React from "react";
import './App.css'
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path = '/dialogs' component={Dialogs}/>
                        <Route path = '/profile' component={Profile}/>
                        <Route path = '/news' component={News}/>
                        <Route path = '/music' component={Music}/>
                        <Route path = '/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
};

export default App;
