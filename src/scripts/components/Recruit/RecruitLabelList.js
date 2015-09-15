'use strict';

import React from 'react/addons';
import RecruitLabel from '../Recruit/RecruitLabel';

//标签列表
export default class RecruitLabelList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: props.labelsChecked};
    }

    static propTypes = {
        labels: React.PropTypes.array.isRequired
    }

    render() {

        const labels = this.props.labels;

        return (
            <div>
                {labels.map((label) =>
                    <RecruitLabel key={label.id} label={label} checked={this.state.checked} />
                )}
            </div>
        );
    }
}

