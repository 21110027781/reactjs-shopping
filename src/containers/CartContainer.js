import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }
    showCartResult = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

//lấy dữ liệu từ trên store
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

//chuyển thành props gửi đi cho các thằng con
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);