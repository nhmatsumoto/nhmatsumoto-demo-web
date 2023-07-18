import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    html,
    body {
        padding: 0;
        margin: 0;
        background-color: #DAFFFB;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-top: 22px;
`;
