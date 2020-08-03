import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import App from '../components/App';
import NoMatch from './NoMatch';
import ScrollToTop from './ScrollToTop';
import AboutUs from '../pages/AboutUs/AboutUs'
import {GlobalStyle} from "../GlobalStyle"
import ShowServices from '../pages/services/ShowServices'
import Urgent from '../pages/SingleService/Urgent/Urgent'
import Chalazion from '../pages/SingleService/Chalazion/Chalazion'
import Cataract from '../pages/SingleService/Cataract/Cataract'
import VisitUs from '../pages/VisitUs/VisitUs'
import Values from '../pages/Readmore/values/Values'
import Choose from '../pages/Readmore/choose/Choose'
import Faq from '../pages/Readmore/faq/Faq'
import Career from '../pages/Readmore/career/Career'
import Dashboard from '../pages/Dashboard/Dashboard'
import Post from '../pages/Post/Post'



class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <GlobalStyle />
                    <ScrollToTop>
                        <App>
                          <Switch>
                              <Route exact path='/login' component={Login} />
                              <Route exact path='/signup' component={SignUp} />
                              <Route exact path="/" component={Home} />
                              <Route exact path="/blog" component={Blog} />
                              <Route exact path="/about" component={AboutUs} />
                              <Route exact path="/services" component={ShowServices} />
                              <Route exact path="/services/:urgent-eye-problems" component={Urgent} />
                              <Route exact path="/services/:chalazion-removal" component={Chalazion} />
                              <Route exact path="/services/:cataract-treatment" component={Cataract} />
                              <Route exact path='/visit' component={VisitUs} />
                              <Route exact path='/about/values' component={Values} />
                              <Route exact path='/about/choose' component={Choose} />
                              <Route exact path='/about/faq' component={Faq} />
                              <Route exact path='/about/careers' component={Career} />
                              <Route exact path='/dashboard' component={Dashboard} />
                              <Route exact path='/post' component={Post} />
                              <Route component={NoMatch} />      
                          </Switch>
                        </App>
                    </ScrollToTop>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
