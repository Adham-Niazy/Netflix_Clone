import React from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import LOGO from '../logo.svg';

const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={LOGO} />
                <Header.Btn to={ROUTES.SIGN_IN}>Sign In</Header.Btn>
            </Header.Frame>
            {children}
        </Header>
    );
}

export default HeaderContainer;