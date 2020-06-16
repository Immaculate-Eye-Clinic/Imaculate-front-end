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
import VisitUs from '../pages/VisitUs/VisitUs'


class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <GlobalStyle />
                    <ScrollToTop>
                        <App>
                          <Switch>
                              <Route  exact path='/login' component={Login} />
                              <Route exact path='/signup' component={SignUp} />
                              <Route exact path="/" component={Home} />
                              <Route exact path="/blog" component={Blog} />
                              <Route exact path="/about" component={AboutUs} />
                              <Route exact path="/services" component={ShowServices} />
                              <Route exact path='/visit' component={VisitUs} />
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