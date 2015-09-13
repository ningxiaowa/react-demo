'use strict';

import React from 'react/addons';
import DepartmentFormList from '../Recruit/DepartmentFormList';
import RecruitLabelList from '../Recruit/RecruitLabelList';

//招聘页面
export default class InterfaceRecruit extends React.Component {

    constructor() {
        super();
        this.state = {checked: false, labelsChecked: false};
    }

    render() {

        //清空部门职位
        const handleClearAll = () => {
            this.setState({checked: false});
        };

        //清空标签
        const handleClearLabels = () => {
            this.setState({labelsChecked: false});
        };

        return (
            <div className="col-md-4">
                <div className="row">
                    <div className="row">
                        <div className="col-md-6 ml-15">
                            <h3>职位</h3>
                        </div>
                        <div clasName="col-md-6">
                            <h3><label onClick={handleClearAll}>清空</label></h3>
                        </div>
                    </div>
                    <div className="row">
                        <DepartmentFormList checked={this.state.checked} />
                    </div>
                </div>

                <div className="row">
                    <div className="row">
                        <div className="col-md-6 ml-15">
                            <h3>标签</h3>
                        </div>
                        <div clasName="col-md-6">
                            <h3><label onClick={handleClearLabels}>清空</label></h3>
                        </div>
                    </div>
                    <div className="row">
                        <RecruitLabelList labelsChecked={this.state.labelsChecked} />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
