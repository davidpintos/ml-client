import React, {useEffect} from 'react';

import {SearchBarContainer} from '../containers/SearchBarContainer';
import {BreadCrumbBarContainer} from '../containers/BreadCrumbBarContainer';

import {
    CONDITION_NEW,
    LABEL_BUY_BUTTON,
    LABEL_CONDITION_NEW,
    LABEL_CONDITION_USED,
    LABEL_QUANTITY_SOLD,
    PRODUCT_DESCRIPTION,
} from './constants';

import {getPriceFormatted} from '../utils';

import './ItemDetails.scss';

export const ItemDetails = (props) => {
    const {onComponentLoad, currentItem = {}} = props;

    useEffect(() => {
        const {id} = props.match.params;

        onComponentLoad(id);
    }, []);

    let itemCondition = LABEL_CONDITION_USED;

    if (currentItem.condition === CONDITION_NEW) {
        itemCondition = LABEL_CONDITION_NEW;
    }

    let itemPrice = null;
    let itemPriceDecimals = null;

    if (currentItem.price) {
        const {amount, decimals} = currentItem.price;

        itemPrice = getPriceFormatted(amount);
        itemPriceDecimals = (decimals === 0) ? '00' : decimals;
    }

    return (
        <div className="main-container">
                <section className="top-bar">
                    <SearchBarContainer />
                </section>
                <section className="breadcrumb-container">
                    <BreadCrumbBarContainer />
                </section>
                <section className="item-details">
                    <div className="content d-flex m-auto col-9">
                        <section className="col-9 left-content">
                            <div className="photo">
                                <img src={currentItem.picture} />
                            </div>
                            <article className="description">
                                <header>
                                    {PRODUCT_DESCRIPTION}
                                </header>
                                <p>
                                    {currentItem.description}
                                </p>
                            </article>
                        </section>
                        <section className="col-3 right-content">
                            <div className="condition">
                             {itemCondition} - {currentItem.sold_quantity} {LABEL_QUANTITY_SOLD}
                            </div>
                            <div className="product-name">
                                {currentItem.title}
                            </div>
                            <div className="d-flex product-price">
                                <div className="amount">
                                    {itemPrice}
                                </div>
                                <div className="decimals">
                                    {itemPriceDecimals}
                                </div>
                            </div>
                            <div className="buy-button">
                                <button type="button">{LABEL_BUY_BUTTON}</button>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="bottom-bar" />
            </div>
    );
};
