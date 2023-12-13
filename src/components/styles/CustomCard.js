import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 100px;
    height: 100px;
    border:1px solid black;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 4px 2px 3px rgba(0,0,0,0.4);
`;
const CustomCard = () => {
  return (
    <>
    <StyledCard/>
    </>
  )
}

export default CustomCard