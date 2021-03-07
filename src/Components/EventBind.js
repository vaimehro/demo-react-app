import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"hi there"
        }
        // this.clickHandler=this.clickHandler.bind(this);
    }
    // clickHandler() {
    //   this.setState({
    //     message:"Good Bye"
    //   });
clickHandler=()=>{
      this.setState({
        message:"Good Bye"
      });
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*binding handler approch 1*/}
                {/*<button onClick={this.clickHandler.bind(this)}>Hello</button>*/}
                {/*binding handler approch 2*/}
                {/*<button onClick={()=>this.clickHandler()}>Hello</button>*/}
                {/*binding handler approch 3*/}
                <button onClick={this.clickHandler}>Hello</button>
            </div>
        );
    }
}

export default EventBind;