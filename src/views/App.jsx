import './App.css'
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import Home from './examples/Home';
import About from './examples/About';


const App = props => (

    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)

export default App