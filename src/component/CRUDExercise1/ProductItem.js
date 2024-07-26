import React, { Component } from 'react'

export default class ProductItem extends Component {

    renderDataJson = () => {
        return this.props.dataJson.map((item, index) => {
            return <div className='col-4' key={index}>
                <div className="card">
                    <img className="card-img-top" src={item.img} alt style={{ width: "100", height: "400px" }} />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">Giá: {item.price.toLocaleString()}</p>
                        <button className='btn btn-success' onClick={() => { this.props.addProductCart(item) }}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderDataJson()}
            </div>
        )
    }
}
