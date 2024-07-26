import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    text = "Day la du lieu tu component parent";
    state = {
        name: "thiss iss state"
    }

    onChangeState = () => {
        this.setState({
            name: "Duy kien"
        })
    }
    render() {
        return (
            <div>
                <Child propsText={this.text} />
                <Child propsText={"Du lieu truyen truc tiep"} />
                <Child propsText={"Du lieu truyen truc tiep 123"} />
                {this.props.children}
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
