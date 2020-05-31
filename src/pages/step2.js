import React from "react";
import styled from "styled-components";
import { Center, AbsoluteCenter, NextButtonContainer, PrevButtonContainer, Button } from "../shared.js";
import Dropdown from "../components/Dropdown.js";

let LargeCircle = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid gray;
    border-radius: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

let OverlapCircles = styled.div`
    display: flex;
    flex-direction: row;
    second {
        margin-left: -200px;
    }
    position: relative;
    .first {
        position: absolute;
        top: 0;
        left: 0;
    }
    .second {
        position: absolute;
        top: 0;
        left: 200px;
    }

    .first div {
        margin-left: -100px;
    }
    .second div {
        margin-left: 100px;
    }

    .middle {
        position: absolute;
        top: 0;
        left: 200px;
        width: 100px;
        height: 300px;
        z-index: 100;
    }
`;

let Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vh;
    padding: 20px;
    border-radius: 10px;
    z-index: 10;
    background: white;
    textarea {
        width: 93%;
        padding: 20px;
        min-height: 200px;
        font-size: 15px;
        :focus {
            outline: none;
        }
    }
`;

let Overlay = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: #888888aa;
    z-index: 5;
`;

let DropdownsHolder = styled.div`
    margin: 30px;
`;

const Dropdowns = [
    { name: "Favorite Food", choices: ["Pizza", "Spaghetti"] },
    { name: "Favorite Pace", choices: ["West Coast", "East Coast"] },
];

function Step2({ setTab, allData, setAllData }) {
    let valid = false;
    let [modal, setModal] = React.useState(false);
    let [modalIndex, setModalIndex] = React.useState(null);

    let textArea = React.useRef();

    let [data, setData] = React.useState({ 1: {}, 2: {}, 3: {} });

    let showModal = (idx) => {
        setModal(true);
        setModalIndex(idx);
    };

    // let handleChange = (val, id) => {
    //     let newData = { ...data, [id]: { val } };
    //     console.log(newData);
    //     setData(newData);
    // };

    React.useEffect(() => {
        setData(allData.interests);
    }, []);

    React.useEffect(() => {
        setAllData({ ...allData, interests: data });
    }, [data]);

    return (
        <div>
            <AbsoluteCenter>
                <h1>Now, what makes them a match?</h1>
                <OverlapCircles>
                    <LargeCircle onClick={() => showModal(1)} className="first">
                        <div>{allData.contact[1].name}</div>
                    </LargeCircle>
                    <div onClick={() => showModal(2)} className="middle" />
                    <LargeCircle onClick={() => showModal(3)} className="second">
                        <div>{allData.contact[2].name}</div>
                    </LargeCircle>
                </OverlapCircles>
            </AbsoluteCenter>
            <NextButtonContainer>
                <Button onClick={() => setTab(3)}>Next</Button>
            </NextButtonContainer>
            <PrevButtonContainer>
                <Button onClick={() => setTab(1)}>Back</Button>
            </PrevButtonContainer>
            {modal && (
                <Modal>
                    {modalIndex == 1 && `Tell us about ${allData.contact[1].name}`}
                    {modalIndex == 2 &&
                        `Tell us why ${allData.contact[1].name} and ${allData.contact[2].name} are perfect for each other.`}
                    {modalIndex == 3 && `Tell us about ${allData.contact[2].name}`}
                    {modalIndex != 2 && (
                        <DropdownsHolder>
                            {Dropdowns.map((item) => (
                                <Dropdown
                                    setData={setData}
                                    data={data}
                                    modalIdx={modalIndex}
                                    name={item.name}
                                    choices={item.choices}
                                    defaultVal={data[modalIndex][item.name]}
                                ></Dropdown>
                            ))}
                        </DropdownsHolder>
                    )}
                    <textarea
                        autoFocus
                        ref={textArea}
                        //onChange={(e) => handleChange(e.target.value, modalIndex)}
                        placeholder={
                            modalIndex == 2
                                ? "Maybe their both a Libra...or they snore the same way."
                                : "What are their interests? Hobbies? Vibe?"
                        }
                        defaultValue={data[modalIndex].description}
                    ></textarea>
                    <Center>
                        <Button
                            onClick={() => {
                                setData({
                                    ...data,
                                    [modalIndex]: { ...data[modalIndex], description: textArea.current.value },
                                });
                                setModal(false);
                            }}
                        >
                            Save
                        </Button>
                    </Center>
                </Modal>
            )}
            {modal && <Overlay onClick={() => setModal(false)}></Overlay>}
        </div>
    );
}

export default Step2;
