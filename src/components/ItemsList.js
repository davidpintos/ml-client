import React, {useEffect} from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';
import {BreadCrumbBarContainer} from '../containers/BreadCrumbBarContainer';

import './General.scss';

import './ItemsList.scss';

export const ItemsList = (props) => {
    const {
        items = [],
        query,
        onComponentLoad,
    } = props;

    useEffect(() => {
        const {query} = props;

        onComponentLoad(query);
    }, [items]);

    let itemsContent = items.map(({id, picture, state, title, price}) => {
        return (
            <section key={`item-${id}`} className="item">
                <div className="photo d-flex justify-content-center">
                    <img src={picture} />
                </div>
                <div className="col-8 details">
                    <div className="price">
                        {price.amount}
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
                <div className="state">
                    {state}
                </div>
            </section>
        )
    });

    return (
        <div className="main-container">
            <section className="top-bar">
                <SearchBarContainer />
            </section>
            <section className="breadcrumb-container">
                <BreadCrumbBarContainer />
            </section>
            <section className="items-list">
                <div className="content m-auto col-9">
                    {itemsContent}
                </div>
            </section>
            <section className="bottom-bar" />
        </div>
    );
};