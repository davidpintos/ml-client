import React from 'react';

import './BreadCrumbBar.scss';

export const BreadCrumbBar = (props) => {
    const {categories = []} = props;

    let content = null;

    if (categories.length) {
        const lastIndex = categories.length - 1;

        content = categories.map((category, index) => {
            const arrow = index === lastIndex ? '' : ' > ';
            const spanClass = index === lastIndex ? 'font-weight-bold' : '';

            return (
                <span key={`category-${index}`} className={spanClass}>{category}{arrow}</span>
            )
        });
    }


    return (
        <div className="breadcrumb-bar">
            <div className="col-9 mx-auto categories">
                <nav>
                    {content}
                </nav>
            </div>
        </div>
    );
};