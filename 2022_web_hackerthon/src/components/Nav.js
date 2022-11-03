import React from "react";
import ListButton from "./ListButton";

class Nav extends React.Component {
    render() {
        return (
            <nav className="wrapper">
                {/* <Button>오투</Button> */}
                <ol>
                    <ListButton name="오투"></ListButton>
                    <ListButton name="여행지"></ListButton>
                    <ListButton name="음식점"></ListButton>
                    <ListButton name="숙소"></ListButton>
                    <ListButton name="토론장"></ListButton>
                    <ListButton name="로그인"></ListButton>
                    <ListButton name="회원가입"></ListButton>
                </ol>
            </nav>
        );
    }
}

export default Nav;
