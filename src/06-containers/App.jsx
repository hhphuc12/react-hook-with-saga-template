import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ListUser from './ListUser';
import StateEg from './StateEg';
import Toast from '../05-components/Toast';

const App = () => {
    return (
        <div className="content-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path="/list-user" component={ListUser} />
                    <Route path="/state-eg" component={StateEg} />
                </Switch>
            </BrowserRouter>
            <Toast/>
        </div>
    );
};

export default App;