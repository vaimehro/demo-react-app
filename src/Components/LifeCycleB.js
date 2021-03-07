import React, {Component} from 'react';


class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Vaibhav'
        }
        console.log( "Lifecycle B Constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log( "Lifecycle B getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log( "Lifecycle B componentDidMount")
    }
    shouldComponentUpdate() {
        console.log('Life Cycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Life Cycle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('Life Cycle B componentDidUpdate')
    }
    render() {
        console.log( "Lifecycle B Render")
        return (<div> Life Cycle B </div>)
    }
}

export default LifeCycleB;