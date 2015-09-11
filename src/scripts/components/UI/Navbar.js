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
            <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="home" className="navbar-brand"> <div style={{marginLeft: '80px', fontSize: '1.3em'}}>首页</div></Link>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className={cx({active: router.isActive('recruit')})}><Link to="recruit">招聘</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
