import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import PageBasket from './components/PageBasket';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                <Switch>
                    <Route exact path='/' >
                        <Header />
                        <Content />
                    </Route>
                    <Route path='/basket' >
                        <PageBasket />
                    </Route>
                    <Route path='/favorites' >
                        <Header />
                        <Content />
                    </Route>
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
