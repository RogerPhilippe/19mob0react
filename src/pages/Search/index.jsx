import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';

const Search = () => {
    const [ results, setResults ] = useState([]);

    const onSearch = (event) => {
        const value = event.currentTarget.value;

        if (value.length < 3) { return }
        
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
        .then(({ data }) => { 
            const { results } = data;
            setResults(results)
        })
        .catch(error => { console.log(error); })

    }

    const renderContent = () => {
        return results.map(({ id, title, price }) => (
            <Content id={ id } title={ title } price={ price } />
        ))

    }

    return (
        <div>
            <input type="text" onChange={ onSearch } />
            { renderContent() }
        </div>
    )

}

export default Search;