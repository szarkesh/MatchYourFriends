import React, { useEffect } from "react";
import styled from "styled-components";

let DropdownSelector = styled.span`
    color: #f76c6c;
    background: #fcfcfc;
    width: 150px;
    box-shadow: 0 0 10px;
    padding: 5px 10px;
    border-radius: 100px;
    cursor: pointer;
`;

let Outer = styled.span`
    position: relative;
    margin: 10px;
`;

let ChoicesContainer = styled.div`
    position: absolute;
    top: 10;
    left: 0;
    z-index: 100;
    background: white;
    width: 150px;
    border: 1px solid gray;
`;

let Choice = styled.div`
    color: #f76c6c;
    padding: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    :hover {
        background: #eaeaea;
    }
`;

function Dropdown({ name, choices, defaultVal, setData, modalIdx, data }) {
    console.log(defaultVal);
    let [selected, setSelected] = React.useState(defaultVal != undefined ? defaultVal : null);
    let [open, setOpen] = React.useState(false);

    const wrapperRef = React.useRef(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Outer ref={wrapperRef}>
            <DropdownSelector onClick={() => setOpen(!open)}>
                {selected == null ? name : `${name}: ${choices[selected]}`}
            </DropdownSelector>
            {open && (
                <ChoicesContainer>
                    {choices.map((choice, index) => (
                        <Choice
                            onClick={() => {
                                setOpen(false);
                                setSelected(index);
                                setData({ ...data, [modalIdx]: { ...data[modalIdx], [name]: index } });
                            }}
                        >
                            {choice}
                        </Choice>
                    ))}
                </ChoicesContainer>
            )}
        </Outer>
    );
}

export default Dropdown;
