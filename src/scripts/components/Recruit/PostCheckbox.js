'use strict';

import React from 'react/addons';

//每一个职位checkbox
export default class PostCheckbox extends React.Component {

    constructor() {
        super();
        this.state = { checked: false };
    }

    static propTypes = {
        post: React.PropTypes.object.isRequired
    }

    render() {

        const post = this.props.post;
        const handleChange = (e) => {
            console.log(e.target.checked);
            this.setState({checked: e.target.checked});
        };

        return (
            <div>
                <input id={post.id} type="checkbox" value={post.id} checked={post.checked} onChange={handleChange} />
                &nbsp;
                {/* htmlFor未生效 //TODO */}
                <lable htmlFor={post.id}>{post.title}</lable>
                &nbsp;
                <lable>{post.count}</lable>
            </div>
        );
    }
}
