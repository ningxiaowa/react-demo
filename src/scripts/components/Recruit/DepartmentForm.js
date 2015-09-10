'use strict';

import React from 'react/addons';
import DepartmentCheckbox from '../Recruit/DepartmentCheckbox';
import PostCheckbox from '../Recruit/PostCheckbox';

//每一个部门区块
export default class DepartmentForm extends React.Component {

    render() {

        return (
            <div>
                <DepartmentCheckbox />
                {/*此处应该是读取数据循环*/}
                <ul>
                    <li><PostCheckbox /></li>
                    <li><PostCheckbox /></li>
                    <li><PostCheckbox /></li>
                    <li><PostCheckbox /></li>
                </ul>
            </div>
        );
    }
}

