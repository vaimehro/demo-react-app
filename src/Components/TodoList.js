import React, {useState, useEffect} from 'react';
import axios from "axios";
import ProjectToastComponent from "./CommonComponent/ProjectToastComponent";
import {Link} from "react-router-dom";

const TodoList = () => {
    const [listOfToDos, setListOfToDos] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setListOfToDos(response.data);

            })
            .catch(error => {

            })
    }, [])

    const handleClick=()=>{

    }
    return (
        <div className={"flex-container"}>
            {
                listOfToDos.map(item => (<ProjectToastComponent onClick={handleClick} key={item.id} user={item.userId} title={item.title}></ProjectToastComponent>))
            }

        </div>
    );
};

export default TodoList;