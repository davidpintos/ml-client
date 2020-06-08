import React from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';

import './General.scss';

export const ItemDetails = () => {

    return (
        <div className="main-container">
            <section className="top-bar">
                <SearchBarContainer />
                Details
            </section>
        </div>
    )
};
