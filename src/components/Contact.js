import React, { useState } from 'react';
import ContactForm from './ContactForm'
import Styled from 'styled-components';
import { Fade } from 'reactstrap';

const ContactContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const ContactHeaderContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1% 0 3% 0;
`
const ContactFormContainer = Styled.div`
`

// const toggleEmail = () => {
//     let elemTest = document.getElementById("hidden-email")

//     if (toggleEmail){
//     elemTest.classList.remove("hidden-email")}
//     else {
//     elemTest.classList.add("hidden-email")
//     }
// }

const StyledButton = Styled.button`
border: none;
background: none;
&:hover {
    font-weight: bold;
    text-decoration: underline;
}
`

const Contact = props => {

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
<ContactContainer>   
    <ContactHeaderContainer>
        <h2>Contact</h2>
        <p>Or<StyledButton onClick={toggle}>click here</StyledButton>for my personal email</p>
        <Fade in={fadeIn} tag="p">
            Brandon.fulmer@outlook.com
        </Fade>
    </ContactHeaderContainer>
    
    <ContactFormContainer>
        <ContactForm />
    </ContactFormContainer>

</ContactContainer>
)
}

export default Contact;