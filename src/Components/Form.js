import React, {Component} from 'react';

class Form extends Component {
    constructor() {

        super();
        this.state = {
            username: '',
            topic:'react'
        }
    }

    handleUsernameChange = (event) => {
        console.log("username entered" + event.target.value)
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChange= (event) => {
        console.log("selected topic value : " + event.target.value)
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit= event => {

        alert(`${this.event.username} ${this.event.topic}`)
        event.preventDefault()
    }
    

    render() {
        return (

            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>

                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic}  onChange={this.handleTopicChange} >

                        <option value="react">React</option>
                        <option value="angularjs">Angularjs</option>
                        <option value="vue">VUE</option>
                    </select>
                </div>
                <div>
                   <button >Submit</button>
                </div>
            </form>

        );
    }
}

export default Form;