import React from "react";
import styled from "styled-components"

const StyledRadioWrapper = styled.label`
    display:inline-flex;
    align-items:center;
    margin-right:10px;
`;
const StyledRadioInput = styled.input`
    appearance:noe;
    -webkit-appearance:none;
    -moz-appearance:none;
    width:20px;
    height:20px;
    border:${(props)=>props.error?"2px solid red":"2px solid black"};
    border-radius:50%;
    margin-right:5px;
    cursor:pointer;
    &:checked{
        background-color:#007672;
    }
`;
const StyledLabel = styled.label`
    color:#333;
`;

const CustomRadio = ({label, ...props})=>{
    return(
        <>
            <StyledRadioWrapper>
                <StyledRadioInput type="radio" {...props}/>
                <StyledLabel>{label}</StyledLabel>
            </StyledRadioWrapper>
        </>
    )
}
export default CustomRadio;