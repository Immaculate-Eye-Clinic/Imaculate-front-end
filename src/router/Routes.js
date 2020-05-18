import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../components/App';
import NoMatch from './NoMatch';
import ScrollToTop from './ScrollToTop';
import {GlobalStyle} from "../GlobalStyle"

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <GlobalStyle />
                    <ScrollToTop>
                        <App>
                        <Switch>
                            <Route exact path="/" component={Home} />
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
