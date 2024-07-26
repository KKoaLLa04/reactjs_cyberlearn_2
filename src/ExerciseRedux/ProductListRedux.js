import React, { Component } from 'react'
import dataJson from '../Data/Exercise1.json'

import { connect } from 'react-redux';

class ProductListRedux extends Component {

    renderLoopData = () => {
        return dataJson.map((item, index) => {
            return <div className='col-4'>
                <div className="card" key={index}>
                    <img style={{ height: "400px" }} className="card-img-top" src={item.img} alt={item.img} />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">
                            {item.quantity}
                        </p>
                        <button className='btn btn-success' onClick={() => { this.props.addCart(item) }}>Thêm sản phẩm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderLoopData()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (item) => {
            let newSp = {
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                img: item.img,
                quantity: item.quantity,
            };

            let action = {
                type: "add_cart", //Attribute default
                newSp
            };

            dispatch(action);
        },
    }
}

export default connect(null, mapDispatchToProps)(ProductListRedux)