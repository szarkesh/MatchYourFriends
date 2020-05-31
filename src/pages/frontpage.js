import React from "react";

import { Button, Container } from "../shared.js";
import styled from "styled-components";

const ImgPosition = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
`;
function FrontPage() {
    return (
        <>
            <Container style={{ marginTop: "150px", marginLeft: "100px" }}>
                <h1>Welcome to Match Your Friends.</h1>
                <h3>For when you're bored at home and you want to play cupid.</h3>
                <Button onClick={() => (window.location.href = "/match")}>Match your friends!</Button>
            </Container>
            <ImgPosition>
                <img width={window.innerWidth / 2} src={require("../img/frontpage.png")} />
            </ImgPosition>
        </>
    );
}

export default FrontPage;
