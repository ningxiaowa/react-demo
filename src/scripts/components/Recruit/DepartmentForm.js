'use strict';

import React from 'react/addons';
import DepartmentCheckbox from '../Recruit/DepartmentCheckbox';
import PostCheckbox from '../Recruit/PostCheckbox';

//每一个部门区块
export default class DepartmentForm extends React.Component {

    static propTypes = {
        department: React.PropTypes.object.isRequired
    }

    render() {

        const department = this.props.department;
        const posts = department.posts;

        return (
            <div>
                <DepartmentCheckbox department={department} />
                <ul>
                    <li>
                        {posts.map((post) =>
                            <PostCheckbox key={post.id} post={post} />
                        )}
                    </li>
                </ul>
            </div>
        );
    }
}

