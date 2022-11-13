import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class IntroduceFestival extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center" style={{ marginTop: "2%" }}>
                    <Col xs="2" md="2" lg="2"></Col>
                    <Col xs="auto" md="auto">
                        <h1>사계절 내내 즐기는 축제</h1>
                    </Col>
                    <Col xs="2" md="2" lg="2"></Col>
                </Row>

                <div style={{ padding: "0 10%", marginTop: "2%" }}>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="festival/1.jpeg" />
                                    <Card.Body>
                                        <Card.Title>텐마텐진 우메 마츠리</Card.Title>
                                        <Card.Text>
                                            텐만구의 상징인 매화 축제로 만개하는 아름다운 매화꽃을
                                            볼 수 있는 축제입니다.
                                        </Card.Text>
                                        <Link to="/login">
                                            <Button variant="primary">Go somewhere</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        {/* <Col className="col-md-3">
                        <Image src="festival/1.jpeg" />
                    </Col> */}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default IntroduceFestival;
