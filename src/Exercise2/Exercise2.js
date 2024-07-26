import React, { Component } from 'react'
import { connect } from 'react-redux'

class Exercise2 extends Component {
    render() {
        return (
            <div className='backgroundImg'>
                <div className='container'>
                    <h1 className='text-center pt-5'>GAME ĐỔ XÚC XẮC</h1>
                    <div className='d-flex justify-content-between mt-5'>
                        <button style={{ backgroundColor: 'pink', height: "150px", width: "150px" }} onClick={() => { this.props.down(true) }}>Xỉu</button>
                        <div>
                            <img src={this.props.dataState.img1} style={{ width: '50px' }} />
                            <img src={this.props.dataState.img2} style={{ width: '50px' }} />
                            <img src={this.props.dataState.img3} style={{ width: '50px' }} />
                        </div>
                        <button style={{ backgroundColor: 'pink', height: "150px", width: "150px" }} onClick={() => { this.props.up(true) }}>Tài</button>
                    </div>

                    <div className='text-center'>
                        <h2>Bạn chọn: <span style={{ color: "red" }}>{this.props.dataState.up === true ? 'Tài' : 'Xỉu'}</span></h2>
                        <h2>Số bàn thắng: <span style={{ color: "green" }}>{this.props.dataState.win}</span></h2>
                        <h2>Số bàn chơi: <span style={{ color: "blue" }}>{this.props.dataState.playCount}</span></h2>
                        <button className='btn btn-success' onClick={() => { this.props.playGame(1) }}>Play game</button>
                    </div>
                </div >
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataState: state.stateGablin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        down: (down) => {
            let action = {
                type: "down",
                down
            }

            dispatch(action);
        },
        up: (up) => {
            let action = {
                type: "up",
                up
            }

            dispatch(action);
        },
        playGame: (play) => {
            let action = {
                type: "playGame",
                play
            }

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise2)