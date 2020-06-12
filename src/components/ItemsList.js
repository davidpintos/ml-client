import React, {useEffect} from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';
import {BreadCrumbBarContainer} from '../containers/BreadCrumbBarContainer';

import {getPriceFormatted} from '../utils';

import './ItemsList.scss';

export const ItemsList = (props) => {
    const {
        history,
        items = [],
        query,
        onComponentLoad,
    } = props;

    useEffect(() => {
        const {query} = props;

        onComponentLoad(query);
    }, [query]);

    const handleItemClick = (e) => {
        const id = e.currentTarget.id;

        history.push(`/items/${id}`);
    }

    let itemsContent = items.map(({id, picture, state, title, price, free_shipping}) => {
        const priceFormatted = getPriceFormatted(price.amount);

        let shipping = null;

        if (free_shipping) {
            shipping = (<div className="freeShipping" />);
        }

        return (
            <section id={id} key={`item-${id}`} className="item" onClick={(e) => handleItemClick(e)}>
                <div className="photo d-flex justify-content-center">
                    <img src={picture} />
                </div>
                <div className="col-8 details">
                    <div className="price">
                        {priceFormatted}
                        {shipping}
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