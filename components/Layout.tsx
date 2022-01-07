import * as React from 'react';
import styled from "styled-components";
import Navbar from './Navbar';

const LayoutWrapper = styled.div`
    padding: 0 30px 0px 30px;
`

interface ILayout {
    children : React.ReactChildren
} 

class Layout extends React.Component<any, any> {
   constructor(props : ILayout){
       super(props);
   }

    render() { 
        return ( 
        <LayoutWrapper>
            <Navbar/>
            {this.props.children}
        </LayoutWrapper> );
    }
}
 
export default Layout ;