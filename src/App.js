import React from 'react';
// import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import store from './store';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
