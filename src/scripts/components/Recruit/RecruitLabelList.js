'use strict';

import React from 'react/addons';
import RecruitLabel from '../Recruit/RecruitLabel';

//标签列表
export default class RecruitLabelList extends React.Component {

    static contextTypes = {
        recruitstore: React.PropTypes.object.isRequired
    };

    render() {

        const {recruitstore} = this.context;
        const labels = recruitstore.getLabels();

        return (
            <div>
                {labels.map((label) =>
                    <RecruitLabel key={label.id} label={label} checked={false} />
                )}
            </div>
        );
    }
}

