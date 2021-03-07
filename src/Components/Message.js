import React ,{Component} from "react"

class Message extends Component{
    constructor() {
        super();
        this.state={
            message:'Welcome Visiter'
        }
    }
   changeText(){
        this.setState({
            message:'Thank you Subscribing'
        })
   }
    render() {
        return (<div><h1>
            {this.state.message}
        </h1>
        <button onClick={()=>this.changeText()}>Subscribe</button>
        </div>)
    }
}
export default Message