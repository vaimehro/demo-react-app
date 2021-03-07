import React from 'react';
import Person from "./Person";

const NameList = () => {
    const persons = [{id:1,name:"ram",age:20},{id:2,name:"shyam",age:30},{id:3,name:"gopal",age:40}]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return <div>{personList}</div>
};

export default NameList;