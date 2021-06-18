import React from 'react';
import { useForm } from 'react-hook-form';
import StyledInput from './CommonComponents/StyledComponents/StyledInput';
import StyledButton from './CommonComponents/StyledComponents/StyledButton';
import StyledForm from './CommonComponents/StyledComponents/StyledForm';
import StyledFieldSet from './CommonComponents/StyledComponents/StyledFieldSet';
import StyledHeading from './CommonComponents/StyledComponents/StyledHeading';
export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (

      <StyledForm >
        <StyledFieldSet>
          <StyledHeading>Create An Account</StyledHeading>
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledInput type="text" placeholder="First Name" {...register("First name", { required: true, maxLength: 80 })} />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledInput type="text" placeholder="Last Name" {...register("Last name", { required: true, maxLength: 100 })} />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledInput type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledInput type="tel" placeholder="Mobile Number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledInput type="PASSWORD" placeholder="Password" {...register("Password", { required: true, minLength: 6 })} />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledButton onClick={handleSubmit(onSubmit)} jump>Sign Up</StyledButton>
        </StyledFieldSet>
      </StyledForm>
  );
}

