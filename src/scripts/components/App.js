'use strict';

import React from 'react/addons';

import Recruit from './Interfaces/Recruit';

export default class App extends React.Component {

    render() {
        return (
            <div className='container'>
                {/* others like navbar */}
                <Recruit />
            </div>
        );
    }
}
