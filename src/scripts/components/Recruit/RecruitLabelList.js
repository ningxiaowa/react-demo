'use strict';

import React from 'react/addons';
import RecruitLabel from '../Recruit/RecruitLabel';

//标签列表
export default class RecruitLabelList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: props.labelsChecked};
    }

    static contextTypes = {
        recruitstore: React.PropTypes.object.isRequired
    };

    //更新state
    componentWillReceiveProps = (props) => {
        this.setState({
            checked: props.labelsChecked
        });
    }

    render() {

        const {recruitstore} = this.context;
        const labels = recruitstore.getLabels();

        return (
            <div>
                {labels.map((label) =>
                    <RecruitLabel key={label.id} label={label} checked={this.state.checked} />
                )}
            </div>
        );
    }
}

