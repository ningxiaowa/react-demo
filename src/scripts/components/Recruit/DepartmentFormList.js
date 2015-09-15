'use strict';

import React from 'react/addons';
import DepartmentForm from '../Recruit/DepartmentForm';

//部门区块列表
export default class DepartmentFormList extends React.Component {

    static propTypes = {
        departments: React.PropTypes.array.isRequired,
        checked: React.PropTypes.bool
    }

    render() {

        const departments = this.props.departments;

        return (
            <div className="ml15">
                {departments.map((department) =>
                    <DepartmentForm key={department.id} department={department} checked={this.props.checked} />
                )}
            </div>
        );
    }
}

