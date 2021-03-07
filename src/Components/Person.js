import React from 'react';
import PropTypes from 'prop-types';

const Person =({person} )=> {
    return (
        <div><h2>
My name is {person.name} and my age is {person.age}
        </h2></div>
    );
};


export default Person;