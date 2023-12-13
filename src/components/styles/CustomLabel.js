import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    color: black;

`;
const CustomLabel = (props) => {
  return (
    <>
    <StyledLabel>{props.label}</StyledLabel>
    </>
  )
}

export default CustomLabel