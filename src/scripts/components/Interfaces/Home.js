'use strict';

import React from 'react/addons';

//主页
export default class InterfaceHome extends React.Component {

    static contextTypes = {
        user: React.PropTypes.object.isRequired
    };

    render() {

        const { user } = this.context;

        return (
            <div>
                <h2>Hello: {user.firstname + ' ' + user.lastname}</h2>
            </div>
        );
    }
}
