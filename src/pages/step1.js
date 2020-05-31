import React from "react";
import styled from "styled-components";

import { CenterColumn, AbsoluteCenter, Input, Button, Container, Center, NextButtonContainer } from "../shared.js";

const Icon = styled.img`
    border-radius: 100px;
    background: ${(props) => props.bg};
`;

const Image = ({ src, bg }) => <Icon bg={bg} src={src}></Icon>;

const LeftRight = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

const CenterAlignContainer = styled(CenterColumn)`
    min-height: calc(100vh - 200px);
    padding: 5%;
    padding-top: 200px;
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

function Step1({ setTab, allData, setAllData }) {
    let [filled, setFilled] = React.useState(false);
    let [valid, setValid] = React.useState(false);

    let handleChange = (val, id, field) => {
        let newData = { ...allData, contact: { ...allData.contact, [id]: { ...allData.contact[id], [field]: val } } };
        setAllData(newData);
        setValid(formFilled(newData.contact));
    };

    React.useEffect(() => {
        setValid(formFilled(allData.contact));
        console.log("hi");
    }, []);

    let formFilled = (data) => {
        let fields = ["name", "phone", "email", "years"];
        let ids = [1, 2];
        let ans = true;
        let years = data[1].year && data[1].year.length > 1 && data[2].year && data[2].year.length > 1;
        let names = data[1].name && data[1].name.length > 1 && data[2].name && data[2].name.length > 1;
        let emails = data[1].email && validEmail(data[1].email) && data[2].email && validEmail(data[2].email);
        let phones = data[1].phone && validPhone(data[1].phone) && data[2].phone && validPhone(data[2].phone);
        console.log("names are" + names);
        console.log("emails are" + emails);
        console.log("phones are" + phones);
        console.log("years are " + years);
        return window.location.href.includes("localhost") || (names && emails && phones);
    };

    let newChange = (e, i) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <AbsoluteCenter>
                <h1>Let's fill out the basics about your friends...</h1>
            </AbsoluteCenter>
            <LeftRight>
                <CenterAlignContainer bg="white">
                    <Image bg="#F5F5F5" src={require("../img/person1.png")} />
                    <div>
                        <Input
                            defaultValue={allData.contact[1].name}
                            placeholder="Name..."
                            onChange={(e) => handleChange(e.target.value, 1, "name")}
                        />
                        <Input 
                            defaultValue={allData.contact[1].year}
                            placeholder="Year (i.e. 2022)..."
                            onChange={(e) => handleChange(e.target.value, 1, "year")}
                        />
                        <Input
                            defaultValue={allData.contact[1].email}
                            placeholder="Email..."
                            onChange={(e) => handleChange(e.target.value, 1, "email")}
                        />
                        <Input
                            defaultValue={allData.contact[1].phone}
                            placeholder="Phone..."
                            onChange={(e) => handleChange(e.target.value, 1, "phone")}
                        />
                    </div>
                </CenterAlignContainer>
                <CenterAlignContainer bg="#F5F5F5">
                    <Image bg="white" src={require("../img/person2.png")} />
                    <div>
                        <Input style = {{backgroundColor: "#F5F5F5"}}
                            defaultValue={allData.contact[2].name}
                            placeholder="Name..."
                            onChange={(e) => handleChange(e.target.value, 2, "name")}
                        />
                        <Input style = {{backgroundColor: "#F5F5F5"}}
                            defaultValue={allData.contact[2].year}
                            placeholder="Year (i.e. 2022)..."
                            onChange={(e) => handleChange(e.target.value, 2, "year")}
                        />
                        <Input style = {{backgroundColor: "#F5F5F5"}}
                            defaultValue={allData.contact[2].email}
                            placeholder="Email..."
                            onChange={(e) => handleChange(e.target.value, 2, "email")}
                        />
                        <Input style = {{backgroundColor: "#F5F5F5"}}
                            defaultValue={allData.contact[2].phone}
                            placeholder="Phone..."
                            onChange={(e) => handleChange(e.target.value, 2, "phone")}
                        />
                    </div>
                </CenterAlignContainer>
            </LeftRight>
            <NextButtonContainer>
                <Button onClick={() => valid && setTab(2)} disabled={!valid}>
                    Next
                    <i style={{ marginLeft: "100px", }} class="fa fa-arrow-right"></i> </Button>
            </NextButtonContainer>
        </div>
    );
}

export default Step1;
