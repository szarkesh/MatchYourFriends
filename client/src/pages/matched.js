import React from "react";
import { Container, CenterColumn, Center, Red } from "../shared";
import queryString from "query-string";

function Matched() {
    const parsed = queryString.parse(window.location.search);

    return (
        <Container>
            <CenterColumn>
                <h1>Hey, it looks like a friend decided you deserved some love today.</h1>
                <h2>
                    All you gotta to is text <Red>{parsed["name"]}</Red> at this number.
                </h2>
                <h1>
                    <Red>{parsed["phone"]}</Red>
                </h1>
                <h4>Trust your friend for once. You two are a good match.</h4>
            </CenterColumn>
        </Container>
    );
}

export default Matched;
