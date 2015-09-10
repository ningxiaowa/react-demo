'use strict';

import React from 'react/addons';
import DepartmentFormList from '../Recruit/DepartmentFormList';

//招聘页面
export default class InterfaceRecruit extends React.Component {

    render() {

        return (
            <div>
                {/*应该用css控制布局*/}
                <br/><br/><br/>
                <h3><lable>职位</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>清空</lable></h3>
                <DepartmentFormList />
                <br/>
                <h3><lable>标签</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>清空</lable></h3>
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
