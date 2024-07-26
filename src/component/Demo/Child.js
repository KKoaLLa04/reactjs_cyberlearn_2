import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>{this.props.propsText}</p>
            </div>
        )
    }
}
