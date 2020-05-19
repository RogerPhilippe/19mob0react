import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    
    state = {
        results: []
    }

    onSearch = (event) => {
        const value = event.currentTarget.value;
        
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
        .then(({ data }) => { 
            const { results } = data;
            this.setState( {results });
        })
        .catch(error => { console.log(error); })

    }

    renderItems() {
        const { results } = this.state;

        return results.map(({ id, title, price }) => (
            <div key={ `key-${id}` }>
                <span>{ `${id}` }</span>
                <span>{ ` | ${title}` }</span>
                <span>{ ` | R$${price} ` }</span>
                <Link to={ `/product/${id}` }>Ver produto</Link>
            </div>
        ))
    }

    render() {
        return (
        <div>
            <input type="text" onChange={ this.onSearch } />
        <div> { this.renderItems() }</div>
        </div>
        );
    }
}

export default Search;