import React from "react";
import styled from "styled-components";
import Step1 from "./step1.js";
import Step2 from "./step2.js";
import Step3 from "./step3.js";

import { Input, Button, Container, Center } from "../shared.js";

const Icon = styled.img`
    border-radius: 100px;
    background: ${(props) => props.bg};
`;

const AbsoluteCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
`;

const Image = ({ src, bg }) => <Icon bg={bg} src={src}></Icon>;

const LeftRight = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

const CenterAlignContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 200px);
    padding: 5%;
    padding-top: 200px;
    background: ${(props) => props.bg};
`;

const NextButtonContainer = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
`;

function validPhone(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

function validEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

function Matcher() {
    let [tab, setTab] = React.useState(1);

    let [sent, setSent] = React.useState(false);

    let [allData, setAllData] = React.useState({ contact: { 1: {}, 2: {} }, interests: { 1: {}, 2: {}, 3: {} } });
    return (
        <>
            {tab == 1 && <Step1 allData={allData} setAllData={setAllData} setTab={setTab} />}
            {tab == 2 && <Step2 allData={allData} setAllData={setAllData} setTab={setTab} />}
            {tab == 3 && (
                <Step3 allData={allData} setAllData={setAllData} setTab={setTab} sent={sent} setSent={setSent} />
            )}
        </>
    );
}

export default Matcher;
