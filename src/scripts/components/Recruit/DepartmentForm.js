'use strict';

import React from 'react/addons';
import DepartmentCheckbox from '../Recruit/DepartmentCheckbox';
import PostCheckbox from '../Recruit/PostCheckbox';

//每一个部门区块
export default class DepartmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: false};
    }

    static propTypes = {
        department: React.PropTypes.object.isRequired
    }

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.checked
        });
    }

    render() {

        const department = this.props.department;
        const posts = department.posts;

        const handleChange = (isChecked) => {
            // 更新状态
            this.setState({checked: isChecked});
            console.log("form:"+this.state.checked);
        };

        return (
            <div>
                <DepartmentCheckbox department={department} checked={this.state.checked} onChanged={handleChange} />
                <ul>
                    <li>
                        {posts.map((post) =>
                            <PostCheckbox key={post.id} post={post} checked={this.state.checked} />
                        )}
                    </li>
                </ul>
            </div>
        );
    }
}

