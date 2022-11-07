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
                <Row xs={1} lg={2}>
                    <Col>
                        <Card style={{ width: "40rem" }}>
                            <Card.Img variant="top" src="img/osaka.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <h1>오사카 성</h1>
                        <hr></hr>
                        <p>
                            오사카에 있는 성. 히메지 성, 구마모토 성과 함께, '일본 3대
                            명성(名城)'[1] 중 하나이기는 하지만, 현대에 복원한 성이다.[2] JR니시니혼
                            오사카 순환선의 오사카죠코엔역(大阪城公園)이나 지하철 츄오선
                            타니마치욘초메역(谷町四丁目), 모리노미야역(森ノ宮), 타니마치선
                            텐마바시역(天満橋), 나가호리츠루미료쿠치선 오사카 비즈니스파크역이
                            근처에 위치해 있다. 성 자체까지는 600m 이상 떨어져 있으니 좀 걸리지만
                            산책하기에는 딱 맞는다. 천수각이 목적이라면 오사카 비즈니스파크역이 가장
                            가깝다. 특히 봄에는 주변의 벚꽃 나무로 풍경이 절정을 이룬다. 임진왜란을
                            일으킨 주범이자 천하통일을 선언한 히데요시가 거주했던 성이자 세키가하라
                            전투 이전까지는 사실상 일본 수도 역할을 한 성이기에 일본의 성 중에서도
                            가장 큰 편이며 주위를 한 바퀴 도는 것만 해도 지칠 수 있다.[3] 오사카
                            성의 전시 자료에 따르면 현재의 오사카 성이 에도 막부에 의해 상당 부분
                            축소되었을 가능성이 있다고 하는데, 정말로 축소되었다고 가정하면 실제로는
                            얼마나 컸을지 상상이 되지 않는다.
                        </p>
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
