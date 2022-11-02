import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav className="wrapper">
                <div>Home</div>
                <div>여행지</div>
                <div>음식점</div>
                <div>숙소</div>
                <div>토론장</div>
                <div>로그인/회원가입</div>
            </nav>
        );
    }
}

export default Nav;
