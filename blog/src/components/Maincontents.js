import ContentsCard from "./ContentsCard";
import Stack from "react-bootstrap/esm/Stack";
import CarouselFadeExample from "./CarouselFadeExample";
import Container from "react-bootstrap/Container";

function Maincontents() {
    return (
        <Container fluid className="text-bg-success p-3">
            <Stack gap={2} className="col-md-12 mx-auto">
                <CarouselFadeExample />
                <ContentsCard />
            </Stack>
        </Container>
    );
}

export default Maincontents;
