'use strict';

import React from 'react/addons';
import DepartmentFormList from '../Recruit/DepartmentFormList';
import RecruitLabelList from '../Recruit/RecruitLabelList';

import RecruitStore from '../../stores/RecruitStore';

//招聘页面
export default class InterfaceRecruit extends React.Component {

    constructor() {
        super();
        this.state = {checked: false, labelsChecked: false};
    }

    render() {

        //data
        const recruitstore = new RecruitStore();

        //清空部门职位
        const handleClearAll = () => {
            this.setState({checked: false});
        };

        //清空标签
        const handleClearLabels = () => {
            this.setState({labelsChecked: false});
        };

        return (
            <div className="bg-recruit color-white col-md-4">
                <div className="row">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-6">
                            <h3>招聘职位</h3>
                        </div>
                        <div className="col-md-4 text-right">
                            <label className="clear-position" onClick={handleClearAll}><strong>清空</strong></label>
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <div className="row">
                        <DepartmentFormList checked={this.state.checked} departments={recruitstore.getDepartments()} />
                    </div>
                </div>

                <div className="row">
                    <div className="row">
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-6">
                            <h3>标签</h3>
                        </div>
                        <div className="col-md-4 text-right">
                            <label className="clear-position" onClick={handleClearLabels}><strong>清空</strong></label>
                        </div>
                        <div className="col-md-1">
                        </div>
                    </div>
                    <div className="row ml33">
                        <RecruitLabelList labelsChecked={this.state.labelsChecked} labels={recruitstore.getLabels()} />
                    </div>
                </div>
                <div className="row ml20 mt10 mb20">
                    <strong>查看所有标签</strong>
                </div>
            </div>
        );
    }
}

module.exports = InterfaceRecruit;
