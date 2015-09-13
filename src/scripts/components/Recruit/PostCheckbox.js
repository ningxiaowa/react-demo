'use strict';

import React from 'react/addons';

//每一个职位checkbox
export default class PostCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    }

    static propTypes = {
        post: React.PropTypes.object.isRequired,
        checked: React.PropTypes.bool.isRequired
    }

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.checked
        });
    }

    render() {

        const post = this.props.post;
        const handleChange = (e) => {
            this.setState({checked: e.target.checked});
            console.log("post:"+this.state.checked);
        };

        return (
            <div className="row ml-30">
                <div className="col-md-1">
                </div>
                <div className="checkbox col-md-8">
                  <label>
                    <input id={post.id} type="checkbox" value={post.id} checked={this.state.checked} onChange={handleChange} />
                    {post.title}
                  </label>
                </div>
                <div className="col-md-2 text-right pr22">{post.count}</div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}
