import React from "react";
import styled from "styled-components";
import {
    Container,
    CenterColumn,
    AbsoluteCenter,
    NextButtonContainer,
    PrevButtonContainer,
    Button,
} from "../shared.js";

const Red = styled.span`
    color: #f76c6c;
    font-weight: bold;
`;

function Step3({ setTab, allData }) {
    return (
        <Container>
            <CenterColumn>
                <h1>Great, now you're ready to go. Here's what happens now.</h1>
                <ol style={{ maxWidth: "500px" }}>
                    <li>
                        <Red>{allData.contact[1].name}</Red> and <Red>{allData.contact[2].name}</Red> will each receive
                        a text that they've been anonymously matched by a mutual friend.
                    </li>
                    <li>
                        They'll get a link to show what you wrote about the other person, and why they'd be perfect for
                        each other. (We wont show them what you wrote about them to preserve your anonymity).
                    </li>
                    <li>
                        They can click match, and will be notified if they match! From there they can chat, or take it
                        to snap ;).
                    </li>
                </ol>
                <Button>Send the text!</Button>
            </CenterColumn>
            <PrevButtonContainer>
                <Button onClick={() => setTab(2)}>Back</Button>
            </PrevButtonContainer>
        </Container>
    );
}

export default Step3;
