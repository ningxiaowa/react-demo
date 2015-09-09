'use strict';

import React from 'react/addons';

export default class InterfaceHome extends React.Component {

    static contextTypes = {
        user: React.PropTypes.object.isRequired
    };

    render() {

        const { user } = this.context;

        return (
            <div>
                Hello: {user.firstname + ' ' + user.lastname}
            </div>
        );
    }
}
