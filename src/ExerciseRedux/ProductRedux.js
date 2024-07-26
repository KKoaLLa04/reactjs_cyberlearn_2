import React, { Component } from 'react'
import Cart from './Cart'
import ProductListRedux from './ProductListRedux'
import { connect } from 'react-redux'

class ProductRedux extends Component {

    renderCountCart = () => {
        this.props.countProduct.reduce((total, item, index) => {
            return total += item.quantity
        }, 0)
    }
    render() {
        return (
            <div className='container'>
                <h1>Danh sách sản phẩm</h1>
                <p className="d-flex justify-content-end" style={{ cursor: "pointer" }} data-toggle="modal" data-target="#modelId">cart ({this.renderCountCart()})</p>
                <ProductListRedux />
                <Cart />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countProduct: state.stateProduct.data
    }
}

export default connect(mapStateToProps)(ProductRedux)