import React from 'react';
// import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
// import store from './store';
import BlockCard from './components/blogCard/BlockCard'

import Navbar from './components/modules/navbar/navbar'
import HomeIcon from './components/homeIcon/HomeIcon'
 
function App() {
    return (
        <BrowserRouter>
                <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />  
            </Switch>
            <BlockCard 
                imgUrl='/Asset/Img/g.jpg'
                caption='What you must know about Corona Virus'
            />
        </BrowserRouter>
    );
}

export default App;
