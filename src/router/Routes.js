import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import NoMatch from './NoMatch';
import ScrollToTop from './ScrollToTop';
import NavBar from '../components/modules/navbar/navbar'

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavBar />
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route component={NoMatch} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
