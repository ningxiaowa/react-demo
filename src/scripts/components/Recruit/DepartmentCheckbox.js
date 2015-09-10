'use strict';

import React from 'react/addons';

//每一个表头部门checkbox
export default class DepartmentCheckbox extends React.Component {

    constructor() {
        super();
        this.state = {checked: false};
    }

    static propTypes = {
        department: React.PropTypes.object.isRequired
    }

    render() {

        const department = this.props.department;
        const handleChange = (e) => this.setState({checked: e.target.checked});

        return (
            <div>
                <input id={department.id} type="checkbox" value={department.id} checked={this.state.checked} onChange={handleChange} />
                &nbsp;
                <lable htmlFor={department.id}>{department.title}</lable>
                &nbsp;
                <lable>&nbsp;&lt;&nbsp;</lable>
                &nbsp;
                <lable>{department.count}</lable>
            </div>
        );
    }
}

