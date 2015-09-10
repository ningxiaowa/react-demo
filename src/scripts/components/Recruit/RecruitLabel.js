'use strict';

import React from 'react/addons';

//标签
export default class RecruitLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
    }

    static propTypes = {
        label: React.PropTypes.object.isRequired,
        checked: React.PropTypes.bool
    }

    render() {

        const label = this.props.label;
        const handleChange = () => {
            //TODO
            this.setState({checked: true});
            console.log("label:"+this.state.checked);
        };

        return (
            <div>
                <button onClick={handleChange} type="button" className="btn btn-default btn-lg">{label.title}&nbsp;{label.count}</button>
            </div>
        );
    }
}
