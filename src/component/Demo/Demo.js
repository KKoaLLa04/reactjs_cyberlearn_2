import React, { Component } from 'react'
import Parent from './Parent'
import Exercise1 from '../Exercise1/Exercise1'

export default class Demo extends Component {

    refParent = React.createRef();

    onChangeState = () => {
        this.refParent.current.onChangeState();
    }

    render() {
        return (
            <Parent ref={this.refParent}>
                <h1>Đây la content child</h1>
                <Exercise1 />
                <button onClick={this.onChangeState}>Click</button>
            </Parent>
        )
    }
}
