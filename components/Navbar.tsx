import styled, { DefaultTheme } from "styled-components";
import React from "react";

enum VARIANT {
    PRIMARY,
    SECONDARY
  }

interface IProps {
    variant?: VARIANT,
    theme : DefaultTheme
}
  
const NavbarWrapper = styled.div<IProps>`
    font-family: ${props => props.theme.primaryFont};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
    height: 80px;
    color: #3f3f3f;
    align-items: center;
    `

const Links = styled.div`
    display: flex;
    flex-direction: row;
`
const Link = styled.a`
    margin-left: 20px;
`

const Img = styled.span`
    width: 60%;
`

class Navbar extends React.Component<any, any> {
    constructor(props: IProps){
        super(props);
    }
    render() {
        return <NavbarWrapper>
        <Img>CUCarpool</Img>
        <Links>
            <Link>Discoveries</Link>
            <Link>Saved</Link>
            <Link>Profile</Link>
        </Links>
    </NavbarWrapper>;
    }
}

export default Navbar;