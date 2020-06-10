import React from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';

export const MainComponent = () => {

    return (
        <div className="main-container">
            <section className="top-bar">
                <SearchBarContainer />
            </section>
        </div>
    )
};
