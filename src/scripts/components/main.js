'use strict';

import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import { ContextFactory } from 'geiger';

import App from './App';
import InterfaceHome from './Interfaces/Home';
import InterfaceRecruit from './Interfaces/Recruit';

require('../../styles/main.sass');

// Declaring our App Context
const Context = ContextFactory({
    user: React.PropTypes.object.isRequired
});

// Fetching app config variables from the HTML page
const config = JSON.parse(window.unescape(document.getElementsByName('config/app')[0].content));

// Building Actions and Stores
//TODO

const Interfaces = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={InterfaceHome} />
        <Route name="recruit" path="/recruit" handler={InterfaceRecruit} />
    </Route>
);

Router.run(
    Interfaces,
    RouteHandler => React.render(
        (<Context
            user={config.user}
            render={() => <RouteHandler /> } />
        ),
        document.getElementById('app')
    )
);
