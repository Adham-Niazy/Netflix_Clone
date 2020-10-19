import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Frame = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }

    
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }

    @media (max-width: 300px) {
        height: 25px;
        width: 90px;
    }
`;

export const Btn = styled(Link)`
    display: block;
    background-color: #E50914;
    height: fit-content;
    color: white;
    border: 0;
    font-size 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-siszing: border-box;

    &:hover {
        background-color: #F40612;
    }
`;



