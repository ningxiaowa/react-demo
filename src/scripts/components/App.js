'use strict';

import React from 'react/addons';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {

    static contextTypes = {
        //todoactions: React.PropTypes.object.isRequired
    };

    //componentDidMount() { this.context.todoactions.fetchTodos(); }

    render() {
        return (
            <div className='main container'>
                <RouteHandler />
            </div>
        );
    }
}
