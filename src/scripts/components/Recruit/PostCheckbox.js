'use strict';

import React from 'react/addons';

//每一个职位checkbox
export default class PostCheckbox extends React.Component {

    constructor() {
        super();
        //TODO 读取数据
        this.state = { id: 'post_001', value: 'aaa', checked: false, title: '这是标题', count: 10 };
    }

    render() {

        const handleChange = (e) => this.setState({checked: e.target.checked});

        return (
            <div>
                <input id={this.state.id} type="checkbox" value={this.state.value} checked={this.state.checked} onChange={handleChange} />
                &nbsp;
                {/* htmlFor未生效 //TODO */}
                <lable htmlFor={this.state.id}>{this.state.title}</lable>
                &nbsp;
                <lable>{this.state.count}</lable>
            </div>
        );
    }
}
