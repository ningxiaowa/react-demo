'use strict';

import React from 'react/addons';

import RecruitMain from './Recruit/RecruitMain';

export default class App extends React.Component {

    render() {
        return (
            <div className='container'>
                {/* others like navbar */}
                <RecruitMain />
            </div>
        );
    }
}
