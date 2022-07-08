import styled from 'styled-components';
import React from 'react';

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;
export const MiddleOfPage = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;
`;


export const FloatRight = styled.div`
    float: right;
`

export const FormRow = styled.div`
    display: table-row;

`;

export const Input = styled.input`
    border: 2px solid black;
    width: 100px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`;

export const StyledComponents = () =>{
    return (
        <Center>
            <div id="plane"><b></b></div>
        </Center>
    );

}