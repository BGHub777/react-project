import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import Styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = Styled.div`
margin: 2% 0 0 0;
`
const CarouselHeading = Styled.div`
display: flex;
justify-content: space-between;
margin: 0 15% 2% 15%;
@media (max-width: 600px){
    flex-direction: column;
    align-items: center;
}
`
const CarouselContainer = Styled.div`
display: flex;
justify-content: center;
width: 100%;
`
const StyledHr = Styled.hr`
margin: 1% 15% 1.25% 15%;
`
const StyledSpan = Styled.span`
position: relative;
top: 5px;
text-decoration: none;
`


const Projects = () => {
    return (
        <Container>

            <CarouselHeading>

            <h4>Projects</h4>
            <StyledSpan>Click <Link to="/projects/cards"> here</Link> to view the Card Display</StyledSpan>
            </CarouselHeading>

            <StyledHr></StyledHr>

            <CarouselContainer>
            <ProjectsCarousel />
            </CarouselContainer>

        </Container>
            )
}

export default Projects