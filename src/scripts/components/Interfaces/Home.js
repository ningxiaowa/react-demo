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
                <br/><br/> {/*应该用css控制布局*/}
                <h2>Hello: {user.firstname + ' ' + user.lastname}</h2>
            </div>
        );
    }
}
