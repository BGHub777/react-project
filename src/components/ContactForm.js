import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Styled from 'styled-components';

const StyledForm = Styled.form`
display: flex;
flex-direction: column;
// justify-content: center;
// align-content: center;
// align-items: center;
// justify-items: center;
`
const StyledInput = Styled.input`
margin: 0% 0 3% 0;
width: 100%;
`
const StyledTextBoxInput = Styled.input`
margin: 0% 0 25% 0;
width: 100%;
height: 100px;
`
const StyledTextBoxLabel = Styled.label`
margin: 2% 0 2% 0;
`
const StyledSubmit = Styled.input`
margin: 0% 0 3% 0;
width: 100%;
border-radius: 5px;
opacity: .9;
&:hover {
    opacity: 1
}
`
const StyledSelect = Styled.select`
margin: 0% 0 0% 0;
width: 100%;
`


const ContactForm = () => {
    const [contact, setContact] = useState({
        name: "",
        company: "",
        email: "",
        information: "",
        additional: "",
    })

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        console.log("data :", data);
        e.target.reset();
    }

    const changeHandler = elem => {
        setContact({ ...contact, [elem.target.name]: elem.target.value })
        console.log("test");
    }

    return (
        
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            
            <label>Your Name: </label>
            <StyledInput onChange={changeHandler} type="text" placeholder="Full Name..." name="name" ref={register({required: true})} />
            
            <label>Company Name: </label>
            <StyledInput onChange={changeHandler} type="text" placeholder="Company..." name="company" ref={register({required: true})} />
            
            <label>Your Email / Phone # </label>
            <StyledInput onChange={changeHandler} type="text" placeholder="Email or Phone Number..." name="email_or_phone_#" ref={register({required: true})} />
            
            <label>Additional Info: </label>
            <StyledSelect name="information" ref={register}>
                <option value="recruiter">I'm a Recruiter</option>
                <option value="freelance"> I'm interested in a freelance project</option>
                <option value=" other"> Other</option>
            </StyledSelect>

            <StyledTextBoxLabel>Questions or Comments: </StyledTextBoxLabel>
            <StyledTextBoxInput onChange={changeHandler} type="text" name="additional" ref={register({required: true})} />

    <StyledSubmit type="submit" />
    </StyledForm>
    
        )
}

export default ContactForm;