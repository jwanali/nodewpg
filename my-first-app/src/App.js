import React, { Component } from 'react';
import Login from './Login.js';
import {styleApp,linkstyle} from './App1.js';
import Events from './Events.js';
import Contact from './Contact.js';

import Pictuers from './pictures.js';


class App extends Component {
    render() {
        
        return (
            <div className = "App">
            <div style = {styleApp}>Welcome to Events</div>
            
            <div className = "pictuer">
            <Pictuers />
            </div>
            <Login />
            <Events />
            <Contact />
            <a href = "https://www.google.com" style = {linkstyle}>welcome to goolge</a>
           
            </div>
           
        )
    }
}
export default App