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
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    border-radius: 100px;
    border: 1px solid #f76c6c;
    background-color: #FFF2F2;
    text-align: center;
    padding: 20px;
    padding-top:15px;
    padding-bottom:15px;
    display:block;
    width:fit-content;

    display: inline-block
    min-width: 100px;
    color: #f76c6c;
    font-weight: bold;
    transition: 0.2s all;
    :hover {
        background-color: #f76c6c;
        color:white;
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

export const Red = styled.span`
    color: #f76c6c;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px 15px;
    // box-shadow: 10px 10px 10px 0px #E5E5E5;
    outline: 0;
    border-width: 0 0 1px;
    
    border-color: darkgrey;
    // border-radius: 5px;
    :focus {
        border-width: 0 0 1px;
        border-color: skyblue;
    }
    display: block;
    margin: 50px;
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
