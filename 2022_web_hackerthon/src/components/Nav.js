import React from "react";
import ListButton from "./ListButton";

import "../css/Nav.css";
import menuLink from "../css/ListButton.module.css";

class Nav extends React.Component {
    render() {
        return (
            <nav id="topMenu" className={menuLink}>
                {/* <Button>오투</Button> */}
                <ListButton name="오투" href="#"></ListButton>
                <ListButton name="여행지" href="#"></ListButton>
                <ListButton name="음식점" href="#"></ListButton>
                <ListButton name="숙소" href="#"></ListButton>
                <ListButton name="토론장" href="#"></ListButton>
                <ListButton name="로그인" href="#"></ListButton>
                <ListButton name="회원가입" href="#"></ListButton>
            </nav>
        );
    }
}

export default Nav;
