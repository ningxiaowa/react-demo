'use strict';

import React from 'react/addons';
import DepartmentForm from '../Recruit/DepartmentForm';

//部门区块列表
export default class DepartmentFormList extends React.Component {

    static contextTypes = {
        recruitstore: React.PropTypes.object.isRequired
    };

    render() {

        const {recruitstore} = this.context;
        const departments = recruitstore.getDepartments();

        return (
            <div>
                {departments.map((department) =>
                    <DepartmentForm key={department.id} department={department} />
                )}
            </div>
        );
    }
}

