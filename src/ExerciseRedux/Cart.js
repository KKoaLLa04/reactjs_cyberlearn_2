import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {

    renderDataLoop = () => {
        return this.props.data.map((item, index) => {
            return <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button className='btn btn-primary' onClick={() => { this.props.plusMinusProduct(item.id, false) }}> - </button>
                    {item.quantity}
                    <button className='btn btn-primary' onClick={() => { this.props.plusMinusProduct(item.id, true) }}> + </button>
                </td>
                <td>{item.description}</td>
                <td>{(item.quantity * item.price).toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={() => { this.props.deleteCart(item.id) }}>Delete</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>image</th>
                                        <th>quantity</th>
                                        <th>description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.renderDataLoop()
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Tong tien</th>
                                        <th colSpan={6}>{this.props.data.reduce((total, item, index) => {
                                            return total += (item.quantity * item.price)
                                        }, 0).toLocaleString()}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateProps = state => {
    return {
        data: state.stateProduct.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (maSp) => {
            let action = {
                type: "deleteCart",
                maSp
            }

            dispatch(action);
        },
        plusMinusProduct: (maSp, plusMinus) => { // plus = true, minus = false
            let action = {
                type: "plusMinus",
                maSp,
                plusMinus
            }

            dispatch(action);
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Cart)