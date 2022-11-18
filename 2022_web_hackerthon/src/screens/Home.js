import React from "react";
import IntroduceOsaka from "../components/IntroduceOsaka";
import IntroduceFestival from "../components/IntroduceFesitval";
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container
         fluid
      
        style={{backgroundImage:"url(image2/realback.jpg)",
        backgroundRepeat : "no-repeat",
        backgroundSize: "cover",
        marginLeft: "0px",
        marginRight: "0px",
            paddingLeft: "100px",
            paddingRight:"100px"
        
    }}
        >
            <IntroduceOsaka />
            <IntroduceFestival />
        </Container>
    );
}

export default Home;