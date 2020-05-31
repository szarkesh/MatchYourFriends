import React from "react";
import styled from "styled-components";

import {
    Container,
    CenterColumn,
    AbsoluteCenter,
    NextButtonContainer,
    PrevButtonContainer,
    Button,
    Red,
} from "../shared.js";

function Step3({ setTab, allData, sent, setSent }) {
    let sendMsgs = () => {
        console.log("sending messages to " + allData.contact[1].phone + "and " + allData.contact[2].phone);
        fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: allData.contact[1].phone,
                body: `A friend has decided you and ${
                    allData.contact[2].name
                } would be a good match. Click the link to see why: ${
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    "/matched?name=" +
                    allData.contact[2].name +
                    "&phone=" +
                    allData.contact[2].phone
                }`,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success == true) {
                    setSent(true);
                } else {
                    alert("Text messages could not be sent. Make sure you entered the numbers correctly.");
                }
            });

        fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: allData.contact[2].phone,
                body: `A friend has decided you and ${
                    allData.contact[1].name
                } would be a good match. Click the link to see why: ${
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    "/matched?name=" +
                    allData.contact[1].name +
                    "&phone=" +
                    allData.contact[1].phone
                }`,
            }),
        });
    };
    return (

        <Container>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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
                <Button disabled={sent} onClick={() => !sent && sendMsgs()}>
                    {sent ? "Messages sent!" : "Send the text!"}
                </Button>
            </CenterColumn>
            <PrevButtonContainer>
                <Button onClick={() => setTab(2)}>
                
                <i style={{ marginRight: "80px", }} class="fa fa-arrow-left"></i> Back </Button>
            </PrevButtonContainer>
        </Container>
    );
}

export default Step3;
