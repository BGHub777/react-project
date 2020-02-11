import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 0 0 0% 25%;
@media (max-width: 800px){
    width: 75%;
    margin: 0 0 2% 13%;
}
`
const Container2 = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 0 0 7.5% 25%;
@media (max-width: 800px){
    width: 75%;
    margin: 0 0 7.5% 13%;
}
`
const StyledHr = Styled.hr`
width: 70%;
margin: 6% 0 3% 0;
`
const StyledH2 = Styled.h2`
margin: 3% 0 5% 0;
`
const StyledP = Styled.p`
margin: 3% 0 1% 0;
width: 70%;
`
const StyledLocation = Styled.p`
margin: 5% 0 0% 0;
width: 70%;
`
const ShortHr = Styled.hr`
width: 40%;
`
const NewHr = Styled.hr`
width: 70%;
`
const StyledUl = Styled.ul`
display: flex;
flex-direction: column;
margin: 0 15% 0 10%;
`
const StyledH5 = Styled.h5`
margin: 1% 0 2.5% 0;
`
const StyledLi = Styled.li`
margin: 3.5% 0 3.5% 0;
`
const StyledSpan = Styled.span`
font-weight: bold;
`

const About = () => {
    return (
        <div>
            <Container>
            <StyledH2>About Me</StyledH2>
            <NewHr></NewHr>
            <StyledP>My full name is Brandon Fulmer, I'm 23 years old and I'm currently a student in Lambda's full-stack web development program. I've been taking courses and coding part-time for over a year, and now I spend 50-60 hours/week writing code.</StyledP>
            <StyledLocation>I'm Looking for Work In: <StyledSpan>Seattle, WA</StyledSpan> <br></br>(Or potentially somewhere else in Western WA)</StyledLocation>
            <StyledHr></StyledHr>
            </Container>
            <Container2>
                <StyledH5>Education</StyledH5>
                <StyledUl>
                    <StyledLi>Sequim High School (High School Diploma)</StyledLi>
                    <StyledLi>Peninsula College (2 Year- Associates Degree)</StyledLi>
                    <StyledLi>Peninsula College (4 Year- Bachelors in Business Administration)</StyledLi>
                    <StyledLi>Edward Jones HQ (9 Months- Passed Series 7 & 66 Exams)</StyledLi>
                    <StyledLi>Lambda School (4 Months- Full-time Intensive non-accredited Code Bootcamp)</StyledLi>
                </StyledUl>
            </Container2>
        </div>
    )
}

export default About;