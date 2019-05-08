import React from "react";
import './App.css'
import Header from "./components/header";
import Nav from "./components/nav";
import Profile from "./components/profile";


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
