import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

function CarouselFadeExample() {
    return (
        <Container fluid style={{padding:"0px"}} >
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src="img/osaka.jpg" alt="First slide" style={{height:"500px"}}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="img/osaka2.jpg" alt="Second slide" style={{height:"500px"}} />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default CarouselFadeExample;
