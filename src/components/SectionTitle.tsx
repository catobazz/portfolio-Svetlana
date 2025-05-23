import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
    
    position: relative;
    margin-bottom: 90px;

    &::before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }

`;
