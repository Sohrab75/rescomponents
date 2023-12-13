import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size:${(props)=>props.fontSize|| "14px"};
    font-weight: 600;
    font-style: normal;
    color: #fff;
    margin-bottom: 0;
`;
const CustomHeading = (props) => {
  return (
    <>
        <StyledHeading fontSize={props.fontSize}>{props.label}</StyledHeading>
    </>
  )
}

export default CustomHeading