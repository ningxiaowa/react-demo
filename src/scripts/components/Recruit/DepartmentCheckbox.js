'use strict';

import React from 'react/addons';

//每一个表头部门checkbox
export default class DepartmentCheckbox extends React.Component {

    constructor() {
        super();
        this.state = { id: 'dep_001', value: 'aaa', checked: false, title: '这是部门标题', count: 40 };
    }

    render() {

        const handleChange = (e) => this.setState({checked: e.target.checked});

        return (
            <div>
                <input id={this.state.id} type="checkbox" value={this.state.value} checked={this.state.checked} onChange={handleChange} />
                &nbsp;
                <lable htmlFor={this.state.id}>{this.state.title}</lable>
                &nbsp;
                <lable>&lt;&lt;</lable>
                &nbsp;
                <lable>{this.state.count}</lable>
            </div>
        );
    }
}

