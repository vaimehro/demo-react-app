import React, {Component} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
class UserList extends Component {

    constructor() {
        super();
        this.state = {
            userList: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then(response => {
                this.setState({userList: response.data})
            })
            .catch(error => {
                this.setState({errorMessage: "error occurred !!!"})
            })
    }

    render() {
        return (
            <div>{
                this.state.userList.length>0?
                this.state.userList.map(item=><Card border="secondary" style={{ width: '18rem',height: '25rem' , float:'left' ,margin :'2em' }}>
                       <Card.Img variant="top" src={item.thumbnailUrl} />
                       <Card.Body>
                           <Card.Title>{item.title}</Card.Title>
                       </Card.Body>
                   </Card>
                    ):<Spinner animation="grow" />

            }

            </div>
        );
    }
}

export default UserList;