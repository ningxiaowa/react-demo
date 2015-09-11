'use strict';

import React from 'react/addons';

//标签
export default class RecruitLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked: false };
    }

    static propTypes = {
        label: React.PropTypes.object.isRequired,
        checked: React.PropTypes.bool
    }

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.checked
        });
    }

    render() {

        const label = this.props.label;
        const handleChange = () => {
            this.setState({checked: !this.state.checked});
            console.log("label:"+this.state.checked);
        };

        return (
            <div>
                <button onClick={handleChange} type="button" className={(this.state.checked ? 'btn-primary' : 'btn-default') + ' btn btn-lg' }>{label.title}&nbsp;{label.count}</button>
            </div>
        );
    }
}
