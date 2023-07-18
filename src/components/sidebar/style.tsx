import styled from 'styled-components';

export const Nav = styled.nav`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 60px;
    width: 100%;
    background-color: #001C30;
    color: #00a775; 
`;

export const Ul = styled.ul`

    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        display: inline;
        padding: 10px;

        a {
            text-decoration: none;
            color: #FFF;
            font-family: Arial Black;
        }
    }
`;

