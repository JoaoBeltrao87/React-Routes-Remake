import './Content.css'
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import About from '../../views/examples/About';
import NotFound from '../../views/examples/NotFound';

const Content = props => (
    <main className="Content">
        <Router>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Router>
    </main>
)

export default Content