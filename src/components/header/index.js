import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
    Background,
    Frame,
    Group,
    Picture,
    Profile,
    Dropdown,
    FilterLink,
    Logo,
    Btn,
    Feature,
    FeatureCallOut,
    Text,
    SearchInput,
    Search,
    SearchIcon,
    PlayButton
} from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Picture = function HeaderPicture({ src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} >
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput 
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return <Link to={to} >
        <Logo {...restProps} />
    </Link>
}

Header.Btn = function HeaderBtn({ children, ...restProps }) {
    return <Btn {...restProps}>{children}</Btn>;
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <FilterLink {...restProps}>{children}</FilterLink>;
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
}

export default Header;