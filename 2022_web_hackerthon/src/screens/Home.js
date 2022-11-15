import React from "react";
import IntroduceOsaka from "../components/IntroduceOsaka";
import IntroduceFestival from "../components/IntroduceFesitval";
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container
        fluid
        style={{backgroundImage:"url(image3/backgroundImage1.jpg)",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover"
    }} 
        >
            <IntroduceOsaka />
            <IntroduceFestival />
        </Container>
    );
}

export default Home;
