import React from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`)
        .then(({ data }) => {
            this.setState({ data });
        })
        .catch(error => { console.log(error) });
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                {this.state.id}
            </div>
        );
    }
}

export default Product;