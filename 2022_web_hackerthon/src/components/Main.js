import React from "react";
import Content from "./Content";

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Content name="여행지"></Content>
                <Content name="음식점"></Content>
                <Content name="숙소"></Content>
                <Content name="토론장"></Content>
            </div>
        );
    }
}

export default Main;