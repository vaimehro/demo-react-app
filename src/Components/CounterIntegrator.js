import React from "react";

const CommonCounter =(WrappedComp)=>{

    class CommonCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state={count:0}
        };

       incrementCounterBy5=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count+5}
            })
       };

       render() {
           return <WrappedComp count={this.state.count} increment={this.incrementCounterBy5} {...this.props}></WrappedComp>
       }
    }
    return CommonCounter;

}

export default  CommonCounter

