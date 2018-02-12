import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCard, actChangeMessage } from './../actions/index'


class ProductsContainer extends Component {
    render() {
        let { products } = this.props;

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products){
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    // code này có nghĩa là chuyển state trên store thành cái props của component này
    return {
        products : state.products //tren reducers/index.js
    }
}


// chuyển thành props cho component này
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCard(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);