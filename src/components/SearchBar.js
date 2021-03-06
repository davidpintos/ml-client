import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import { SEARCH_PLACEHOLDER } from './constants';

import './SearchBar.scss';

const SearchBar = (props) => {
    const { handleSubmit, history, location} = props;

    let currentQuery = '';

    if (location && location.search) {
        currentQuery = location.search.split('=')[1].replace(/\+/g, ' ').replace(/%20/g, ' ');
    }

    const [query, setQuery] = useState(currentQuery);

    const handleFormSubmit = (e) => {
        if (query !== currentQuery.trim()) {
            history.push(`/items?search=${query}`);
        } else {
            e.preventDefault();
        }
    }

    const handleLogoClick = () => {
        history.push('/');
    }

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row bar">
                    <div className="col-2 logo-section">
                        <div className="logo" onClick={handleLogoClick} />
                    </div>
                    <div className="col-10 form-section">
                        <form onSubmit={handleFormSubmit} id="form">
                            <input
                                id="queryInput"
                                name="query"
                                component="input"
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder={SEARCH_PLACEHOLDER}
                            />
                            <div>
                                <button className="submitBtn" type="submit" onSubmit={handleFormSubmit}></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter((SearchBar));
