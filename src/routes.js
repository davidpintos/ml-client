import React from 'react';
import {
    Route,
    Switch,
    IndexRoute,
} from 'react-router-dom';

import {MainComponentContainer} from './containers/MainComponentContainer';
import {ItemsListContainer} from './containers/ItemsListContainer';
import {ItemDetailsContainer} from './containers/ItemDetailsContainer';


export const getRoutes = () => {

    return (
        <Switch>
            <Route exact path="/" component={MainComponentContainer} />
            <Route exact path="/items/:id" component={ItemDetailsContainer}/>
            <Route path="/items" component={ItemsListContainer}/>
        </Switch>
    );
};