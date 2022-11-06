import React from "react";
import Content from "./Content";
import wrapper from "../css/Content.module.css";
import "../css/Main.css";

class Main extends React.Component {
    render() {
        return (
            <div id="contentWrapper" className={wrapper}>
                <Content name="여행지"></Content>
                <Content name="음식점"></Content>
                <Content name="숙소"></Content>
                <Content name="토론장"></Content>
            </div>
        );
    }
}

export default Main;