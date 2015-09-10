'use strict';

import React from 'react/addons';
import DepartmentForm from '../Recruit/DepartmentForm';

//部门区块列表
export default class DepartmentFormList extends React.Component {

    render() {

        return (
            <div>
                {/*此处应该是读取数据循环*/}
                <DepartmentForm />
                <DepartmentForm />
                <DepartmentForm />
                <DepartmentForm />
            </div>
        );
    }
}

