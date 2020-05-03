import React from 'react';
// import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
// import store from './store';

import Navbar from './components/modules/navbar/navbar'
 
function App() {
    return (
        <BrowserRouter>
                <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />  
            </Switch>
        </BrowserRouter>
    );
}

export default App;
