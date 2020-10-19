import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Background,
    Frame,
    Logo,
    Btn
} from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return <Link to={to} >
        <Logo {...restProps} />
    </Link>
}

Header.Btn = function HeaderBtn({ children, ...restProps }) {
    return <Btn {...restProps}>{children}</Btn>;
}

export default Header;