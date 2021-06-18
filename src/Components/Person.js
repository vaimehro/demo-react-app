import React from 'react';
import { useForm } from 'react-hook-form';
import StyledInput from './CommonComponents/StyledComponents/StyledInput';
import StyledButton from './CommonComponents/StyledComponents/StyledButton';
import StyledForm from './CommonComponents/StyledComponents/StyledForm';
import StyledFieldSet from './CommonComponents/StyledComponents/StyledFieldSet';
import StyledHeading from './CommonComponents/StyledComponents/StyledHeading';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
export default function Person() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  console.log(errors);

  const style = {
    display: "flex",
    justifyContent: "space-around"
    
  };
  return (
    <div className="login-form-container" style={style}>
      <LoginForm/>
      <SignupForm/>
    </div>
  );
}

