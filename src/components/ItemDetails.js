import React, {useEffect} from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';
import {BreadCrumbBarContainer} from '../containers/BreadCrumbBarContainer';

import './General.scss';

import './ItemDetails.scss';

export const ItemDetails = (props) => {
    const {onComponentLoad} = props;

    useEffect(() => {
        const {id} = props.match.params;

        onComponentLoad(id);
    }, []);

    return (
        <div className="main-container">
            <section className="top-bar">
                <SearchBarContainer />
            </section>
            <section>
                <BreadCrumbBarContainer />
            </section>
            <section className="items-list">
                <div className="content m-auto col-9">
                    Details
                </div>
            </section>
            <section className="bottom-bar" />
        </div>
    )
};
