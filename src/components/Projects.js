import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import Styled from 'styled-components';

const StyledH2 = Styled.h2`
color: black;
margin: 2% 0 2% 0;
`
const StyledH3 = Styled.h3`
margin: 2% 0 0 0%;
display: flex;
justify-content: center;
`
const Container = Styled.div`
margin: 0 20% 0 20%;
`
const StyledButton = Styled.button`
border-radius: 5px;
background: none;
margin: 5% 0 2% 0;
`

const Projects = () => {
    return (
        <Container>
            <StyledH2>Click to Learn More</StyledH2>
            <ProjectsCarousel />
            <StyledH3>Not the Carousel-type?</StyledH3>
            <StyledButton>Click Here!</StyledButton>
        </Container>
    )
}

export default Projects