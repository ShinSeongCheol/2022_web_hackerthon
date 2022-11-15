import React from "react";
import IntroduceOsaka from "../components/IntroduceOsaka";
import IntroduceFestival from "../components/IntroduceFesitval";
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <IntroduceOsaka />
            <hr></hr>
            <IntroduceFestival />
        </Container>
    );
}

export default Home;
