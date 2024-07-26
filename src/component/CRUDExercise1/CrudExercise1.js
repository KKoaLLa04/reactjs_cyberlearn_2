import React, { Component } from 'react'
import Model from './Model'
import ProductList from './ProductList'

export default class CrudExercise1 extends Component {

    state = {
        productCart: []
    }

    addProductCart = (item) => {
        let newProduct = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            img: item.img,
            quantity: 1,
        }


        let index = this.state.productCart.findIndex((item) => item.id === newProduct.id);
        if (index !== -1) {
            this.state.productCart[index].quantity += 1;
        } else {
            this.state.productCart.push(newProduct)
        }

        // this.state.productCart.push(item)
        this.setState({
            productCart: this.state.productCart
        }
        )
    }

    removeProductCart = (item) => {
        let index = this.state.productCart.findIndex((product) => product.id === item.id);

        if (index !== -1) {
            this.state.productCart.splice(index, 1);
        }

        this.setState({
            productCart: this.state.productCart
        }
        )
    }

    render() {
        return (
            <div >
                <Model dataJson={this.state.productCart} removeProduct={this.removeProductCart} />
                <h1 className='text-center'>Danh sách Sản phẩm</h1>
                <div className='container'>
                    <p className='d-flex justify-content-end' style={{ cursor: "pointer" }} data-toggle="modal" data-target="#modelId">(0) Cart</p>
                    <ProductList addProductCart={this.addProductCart} />
                </div>
            </div>
        )
    }
}
