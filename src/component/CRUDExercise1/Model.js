import React, { Component } from 'react'

export default class Model extends Component {

    renderDataJson = () => {
        return this.props.dataJson.map((item, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td> <img src={item.img} style={{ width: "100px" }} /></td>
                <td> {item.price * item.quantity}</td>
                <td> <button className='btn btn-danger' onClick={() => { this.props.removeProduct(item) }}>Xoa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng nek</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Mô tả</th>
                                            <th>Anh sp</th>
                                            <th>Tổng tiền</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderDataJson()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
