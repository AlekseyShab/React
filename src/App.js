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
import DialogsContainer from "./components/Dialogs/dialogsContainer";


const App = (props) => {
        return (
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        {/*<Route path = '/dialogs' component={Dialogs}/>*/}
                        {/*<Route path = '/profile' component={Profile}/>*/}
                        {/*<Route path = '/news' component={News}/>*/}
                        {/*<Route path = '/music' component={Music}/>*/}
                        {/*<Route path = '/settings' component={Settings}/>*/}

                        <Route path = '/dialogs'
                               render={() => <DialogsContainer store={props.store} />}/>
                        <Route path = '/profile'
                               render={() => <Profile
                                   store={props.store} />}/>
                        <Route path = '/news'
                               render={() => <News/>}/>
                        <Route path = '/music'
                               render={() => <Music/>}/>
                        <Route path = '/settings'
                               render={() => <Settings/>}/>
                    </div>
                </div>
        );
};

export default App;
