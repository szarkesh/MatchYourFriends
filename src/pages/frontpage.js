import React from "react";
import { Button, Container } from "../shared.js";
import styled from "styled-components";
// import landingBackground from ".../img/landingBackground.png"

const ImgPosition = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
`;

function FrontPage() {
    document.body.style.backgroundImage = "landingBackground.png";
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Container style={{ marginTop: "150px", marginLeft: "100px" }}>
                <h1 className = "text">Welcome to MatchYourFriends.</h1>
                <h3 style = {{marginTop : "30px"}} className = "subtitle">For when you're bored at home and want to play cupid.</h3>
                <Button style = {{marginTop : "30px"}} className = "button" onClick={() => (window.location.href = "/match")}>Get Started! 
                <i style={{ marginLeft: "100px", }} class="fa fa-arrow-right"></i> </Button>
            </Container>
            <ImgPosition>
                <img width={window.innerWidth / 2} src={require("../img/frontpage.png")} />
            </ImgPosition>

        </>
    );
}

export default FrontPage;
