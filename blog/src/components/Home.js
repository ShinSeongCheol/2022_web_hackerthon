import ContentsCard from "./ContentsCard";
import Stack from "react-bootstrap/esm/Stack";
import CarouselFadeExample from "./CarouselFadeExample";
import Container from "react-bootstrap/Container";

function Home() {
    return (
        <Container fluid style={{padding:"0px"}}>
                <Stack gap={3} className="col-md-12 mx-auto">
                    <CarouselFadeExample />
                    <ContentsCard />
                </Stack>
        </Container>
    );
}

export default Home;
