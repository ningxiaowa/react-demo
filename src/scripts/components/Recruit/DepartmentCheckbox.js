'use strict';

import React from 'react/addons';

//每一个表头部门checkbox
export default class DepartmentCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: props.checked};
    }

    static propTypes = {
        department: React.PropTypes.object.isRequired,
        onChanged: React.PropTypes.func.isRequired,
        checked: React.PropTypes.bool.isRequired
    }

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.checked
        });
    }

    render() {

        const department = this.props.department;
        const handleChange = (e) => {
            this.setState({checked: e.target.checked});
            this.props.onChanged(e.target.checked);
            console.log("dep:"+this.state.checked);
        };

        return (
            <div>
                <input id={department.id} type="checkbox" value={department.id} checked={this.state.checked} onChange={handleChange} />
                &nbsp;
                <label htmlFor={department.id}>{department.title}</label>
                &nbsp;
                <label>&nbsp;&lt;&nbsp;</label>
                &nbsp;
                <label>{department.count}</label>
            </div>
        );
    }
}

