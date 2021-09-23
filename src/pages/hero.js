import React from "react";


import { Button, Container } from '../shared.js';
import styled from 'styled-components';

const ImgPosition = styled.div`
    position: absolute;
    right: 0px;
    bottom: 0px;
`;


function Hero({ }) {
    return (
        <div>
            <div className="flex flex-column align-center">
                Coming Soon
            </div>
            <div className="font-sans">Match your friends now!</div>
        </div>
    )
}

export default Hero