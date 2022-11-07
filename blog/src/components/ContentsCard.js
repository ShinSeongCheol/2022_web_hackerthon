import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Stack from 'react-bootstrap/Stack';

function ContentsCard() {
    return (
        <>
            <Container fluid>
                <Stack gap={3}>
                    <Row xs={1} md={1}>
                        <Col xs={6} md={4}></Col>
                        <Col xs={6} md={4}>
                            <Card border="dark" style={{ width: "45rem" }}>
                                <Card.Img variant="top" src="img/osaka.jpg" />
                                <Card.Body>
                                    <Card.Text>test</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}></Col>
                    </Row>

                    <Row xs={1} md={1}>
                        <Col xs={6} md={4}></Col>
                        <Col xs={6} md={4}>
                            <Card border="dark" style={{ width: "45rem" }}>
                                <Card.Img variant="top" src="img/osaka.jpg" />
                                <Card.Body>
                                    <Card.Text>test</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}></Col>
                    </Row>

                    <Row xs={1} md={1}>
                        <Col xs={6} md={4}></Col>
                        <Col xs={6} md={4}>
                            <Card border="dark" style={{ width: "45rem" }}>
                                <Card.Img variant="top" src="img/osaka.jpg" />
                                <Card.Body>
                                    <Card.Text>test</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}></Col>
                    </Row>

                    <Row xs={1} md={1}>
                        <Col xs={6} md={4}></Col>
                        <Col xs={6} md={4}>
                            <Card border="dark" style={{ width: "45rem" }}>
                                <Card.Img variant="top" src="img/osaka.jpg" />
                                <Card.Body>
                                    <Card.Text>test</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}></Col>
                    </Row>
                </Stack>
            </Container>
        </>
    );
}

export default ContentsCard;
