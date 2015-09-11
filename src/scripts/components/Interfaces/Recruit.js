'use strict';

import React from 'react/addons';
import DepartmentFormList from '../Recruit/DepartmentFormList';
import RecruitLabelList from '../Recruit/RecruitLabelList';

//招聘页面
export default class InterfaceRecruit extends React.Component {

    constructor() {
        super();
        this.state = {checked: false};
    }

    render() {

        const handleClick = () => {
            this.setState({checked: !this.state.checked});
        };

        return (
            <div>
                {/*应该用css控制布局*/}
                <br/><br/><br/>
                <h3>
                    <lable>职位</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <lable onClick={handleClick}>全选/清空</lable>
                </h3>
                <DepartmentFormList checked={this.state.checked} />
                <br/>
                <h3><lable>标签</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>清空</lable></h3>
                <RecruitLabelList />
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
