import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            // Redirect to Google Scholar with the search query
            window.open(`https://scholar.google.co.in/scholar?q=${encodeURIComponent(query)}&hl=en&as_sdt=0&as_vis=1&oi=scholart`, '_blank');
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
