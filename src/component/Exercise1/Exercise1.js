import React, { Component } from 'react'
import Model from './Model';

export default class Exercise1 extends Component {

    dataJson = [
        { id: 1, name: "Vinsmart Live", "price": 1500000, "screen": 'AMOLED, FHD + 12322332', "camereHead": "20 MP", "cameraBack": "Chính 48MP & PHhụ 8MP, 5MP", ram: "4GB", rom: "64GB", img: './assets/p1.jfif' },
        { id: 2, name: "Vinsmart Live1", "price": 2500000, "screen": 'AMOLED, FHD3123 + 2332', "camereHead": "20 MP", "cameraBack": "Chính 48MP & PHhụ 8MP, 5MP", ram: "4GB", rom: "64GB", img: './assets/p2.jfif' },
        { id: 3, name: "Vinsmart Live2", "price": 3500000, "screen": 'AMOLED, FHD 12312+ 2332', "camereHead": "20 MP", "cameraBack": "Chính 48MP & PHhụ 8MP, 5MP", ram: "4GB", rom: "64GB", img: './assets/p3.webp' },
    ];

    state = {
        dataJson: this.dataJson[0]
    }

    renderDataLoop = () => {
        return this.dataJson.map((item, index) => {
            return <div className='col-4' key={index}>
                <div className="card">
                    <img className="card-img-top" src={item.img} alt style={{ width: "100%", height: "200px" }} />
                    <div className="card-body text-center">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                        <button data-toggle="modal" data-target="#modelId" className='btn btn-success btn-sm' onClick={() => { this.changeDataDetail(item) }}>View detail</button>
                    </div>
                </div>
            </div>
        })
    }

    changeDataDetail = (product) => {
        this.setState({
            dataJson: product
        })
    }

    render() {
        return (
            <div>
                <Model content={this.state.dataJson} />
                <h1 className='text-center'>DANH SÁCH SẢN PHẨM</h1>
                <div className='row'>
                    {this.renderDataLoop()}
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <h4>Meizu 16Xs</h4>
                        <img src={this.state.dataJson.img} style={{ width: "100%" }} />
                    </div>
                    <div className='col-8'>
                        <h4>Thông số kỹ thuật</h4>
                        <table class="table">
                            <tr>
                                <td>Màn hình</td>
                                <td>{this.state.dataJson.screen}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{this.state.dataJson.screen}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{this.state.dataJson.camereHead}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{this.state.dataJson.cameraBack}</td>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{this.state.dataJson.ram}</td>
                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{this.state.dataJson.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
