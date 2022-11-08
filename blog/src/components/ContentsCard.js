import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

function ContentsCard() {
    return (
        <Stack gap={3}>
            <Container className="text-bg-secondary p-3">
                <Row xs={1}>
                    <Col>
                    <h1>오사카 성</h1>
                        <hr></hr>
                        <Card style={{ width: "50%", float:"none", margin:"0 auto"}}>
                            <Card.Img variant="top" src="img/osaka.jpg" />
                        </Card>
                        <hr></hr>
                        <Button>구경하기</Button>
                    </Col>

                </Row>
            </Container>

            <Container className="text-bg-secondary p-3">
                <Row xs={1} lg={2}>
                    <Col>
                        <Card style={{ width: "40rem" }}>
                            <Card.Img variant="top" src="img/osaka.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="text-bg-secondary p-3">
                <Row xs={1} lg={2}>
                    <Col>
                        <Card style={{ width: "40rem" }}>
                            <Card.Img variant="top" src="img/osaka.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="text-bg-secondary p-3">
                <Row xs={1} lg={2}>
                    <Col>
                        <Card style={{ width: "40rem" }}>
                            <Card.Img variant="top" src="img/osaka.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default ContentsCard;
