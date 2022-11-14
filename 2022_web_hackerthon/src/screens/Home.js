import React from "react";
import IntroduceOsaka from "../components/IntroduceOsaka";
import IntroduceFestival from "../components/IntroduceFesitval";
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

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
