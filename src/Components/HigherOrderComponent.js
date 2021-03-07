import React, {Component} from 'react';
import CommonCounter from "./CounterIntegrator";

class HigherOrderComponent extends Component {

    render() {
        const {count ,increment}=this.props
        return (
            <div>{count}
            <button onClick={increment}>Inrement by 5</button>

            </div>
        );
    }
}

export default CommonCounter(HigherOrderComponent)