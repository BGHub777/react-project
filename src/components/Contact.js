import React from 'react';
import ContactForm from './ContactForm'
import Styled from 'styled-components';

const ContactContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 5% 0 0 0;
`
const ContactHeaderContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 0 3% 0;
`
const ContactFormContainer = Styled.div`
`



const Contact = () => {
    return (
<ContactContainer>   
    <ContactHeaderContainer>
        <h2>Contact</h2>
        <p>Or click to email me directly!</p>
    </ContactHeaderContainer>
    
    <ContactFormContainer>
        <ContactForm />
    </ContactFormContainer>

</ContactContainer>
)
}

export default Contact;