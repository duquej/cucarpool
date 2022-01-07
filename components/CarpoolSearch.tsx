import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ISearchProps {
    theme : DefaultTheme
}

const SearchWrapper = styled.div<ISearchProps>`
    background-color : #eaeaea;
    font-family : ${props => props.theme.primaryFont}
`

const SearchHeader = styled.h1`
    color : black;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 20px;
    margin-right: 16px;

`

const SearchSubText = styled.div`

`

class CarpoolSearch extends React.Component<any,any> {
    constructor(props : ISearchProps){
        super(props);
    }

    render(){
        return <SearchWrapper>
            <SearchHeader>Find Local Carpoolers</SearchHeader>
            <SearchSubText>Search easier and safer with Cornell Carpool</SearchSubText>

        </SearchWrapper>
    }
}

export default CarpoolSearch;