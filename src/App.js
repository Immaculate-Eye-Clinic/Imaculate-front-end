import React from 'react';
// import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
// import store from './store';
import BlockCard from './components/blogCard/BlockCard'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
            <BlockCard />
        </BrowserRouter>
    );
}

export default App;
