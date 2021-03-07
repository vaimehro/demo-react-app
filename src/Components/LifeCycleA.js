import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";


class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'mehrotra'
        }
        console.log( "Lifecycle A Constructor")
    }
   static getDerivedStateFromProps(props, state){
       console.log( "Lifecycle A getDerivedStateFromProps")
       return null
   }
   componentDidMount() {
       console.log( "Lifecycle A componentDidMount")
   }
   shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Life Cycle A shouldComponentUpdate')
        return true
   }
   getSnapshotBeforeUpdate(prevProps, prevState) {
       console.log('Life Cycle A getSnapshotBeforeUpdate')
       return null
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
       console.log('Life Cycle A componentDidUpdate')
   }
    changeState=()=>{
        this.setState({
            name:'Vaibhav'
        });
        console.log(this.state.name)
    }
    render() {
        console.log( "Lifecycle A Render")
        return (<div>Life Cycle A value {this.state.name}
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>);
    }
}

export default LifeCycleA;