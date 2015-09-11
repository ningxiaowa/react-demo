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

        //全选
        const handleCheckAll = () => {
            //this.setState({checked: !this.state.checked});
            this.setState({checked: true});
        };
        //清空
        const handleClearAll = () => {
            this.setState({checked: false});
        };

        return (
            <div>
                {/*应该用css控制布局*/}
                <br/><br/><br/>
                <h3>
                    <label>职位</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label onClick={handleCheckAll}>全选</label>
                    &nbsp;
                    <label onClick={handleClearAll}>清空</label>
                </h3>
                <DepartmentFormList checked={this.state.checked} />
                <br/>
                <h3><label>标签</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>清空</label></h3>
                <RecruitLabelList />
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
