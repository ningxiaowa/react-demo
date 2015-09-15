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
        onChanged: React.PropTypes.func.isRequired
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
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="checkbox col-md-8">
                    <label className="color-white">
                        <input id={department.id} type="checkbox" value={department.id} checked={this.state.checked} onChange={handleChange} />
                        <strong>{department.title}</strong>&nbsp;<i className="fa fa-chevron-down"></i>
                    </label>
                </div>
                <div className="col-md-2 text-right">
                    <span className="badge">{department.count}</span>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        );
    }
}

