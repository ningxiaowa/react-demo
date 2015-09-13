'use strict';

import React from 'react/addons';
import { Link } from 'react-router';
import cx from 'classnames';

//顶部导航
export default class UINavbar extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    render() {

        const { router } = this.context;

        return (
            <ul className="nav nav-tabs">
              <li role="presentation" className={cx({active: router.isActive('/')})}><Link to="home">Home</Link></li>
              <li role="presentation" className={cx({active: router.isActive('recruit')})}><Link to="recruit">Recruit</Link></li>
            </ul>
        );
    }
}
