import React from "react";
import './App.css'
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";


class App extends React.Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <Profile />
            </div>
        );
    }
}

export default App;
