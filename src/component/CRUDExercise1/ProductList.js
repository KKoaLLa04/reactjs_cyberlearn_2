import React, { Component } from 'react'
import dataJson from '../../Data/Exercise1.json'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <ProductItem dataJson={dataJson} addProductCart={this.props.addProductCart} />
            </div>
        )
    }
}
