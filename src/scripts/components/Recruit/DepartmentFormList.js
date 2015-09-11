'use strict';

import React from 'react/addons';
import DepartmentForm from '../Recruit/DepartmentForm';

//部门区块列表
export default class DepartmentFormList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: props.checked};
    }

    static contextTypes = {
        recruitstore: React.PropTypes.object.isRequired
    };

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.checked
        });
    }

    render() {

        const {recruitstore} = this.context;
        const departments = recruitstore.getDepartments();

        return (
            <div>
                {departments.map((department) =>
                    <DepartmentForm key={department.id} department={department} checked={this.state.checked} />
                )}
            </div>
        );
    }
}

