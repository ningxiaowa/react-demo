'use strict';

import React from 'react/addons';
import DepartmentFormList from '../Recruit/DepartmentFormList';

//招聘页面
export default class InterfaceRecruit extends React.Component {

    render() {

        return (
            <div>
                <br/><br/><br/>
                <h2>这里是部门</h2><br/>
                <DepartmentFormList />
                <br/>
                <h2>这里是标签</h2>
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
