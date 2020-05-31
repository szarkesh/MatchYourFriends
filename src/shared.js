import styled from "styled-components";

export const AbsoluteCenter = styled.div`
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
`;

export const Button = styled.div`
    padding: 12px;
    font-size: 17px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #f76c6c;
    min-width: 100px;
    color: white;
    text-align: center;
    font-weight: bold;
    transition: 0.2s all;
    :hover {
        background-color: #f78c8c;
        ${(props) => (props.disabled ? "background: #DFDFDF" : "")}
    }
    ${(props) => (props.disabled ? "background: #DFDFDF" : "")}
`;

export const NextButtonContainer = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
`;

export const PrevButtonContainer = styled.div`
    position: absolute;
    left: 50px;
    bottom: 50px;
`;

export const Container = styled.div`
    padding: 5% 5%;
    @media (max-width: 500px) {
        padding: 5% 2%;
    }
`;

export const Input = styled.input`
    padding: 10px 15px;
    color: #333333;
    border: 1px solid gray;
    border-radius: 5px;
    :focus {
        border: 1px solid blue;
    }
    display: block;
    margin: 15px;
    font-size: 20px;
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.bg};
`;
