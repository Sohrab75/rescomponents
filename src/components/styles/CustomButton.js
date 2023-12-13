import React from 'react'
import styled from "styled-components"

const StyledButton = styled.button`
  height:32px;
  border: ${(props)=>props.border|| "1px solid #e1e1e1"};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: black;
  border-radius: 20px;
  background-color: #fff;
  padding:8px 24px;
  line-height:12px;
  &:hover{
    border: 1px solid #007672;
    color: #007672;
    cursor: pointer;
  }
  &:disabled{
    pointer-events: none;
    background-color: #e1e1e1;
  }
`;
const CustomButton = (props) => {
  return (
    <>
      <StyledButton border={props.border} onClick={props.onClick} className={props.className} disabled={props.disabled}>{props.label}</StyledButton>
    </>
  )
}

export default CustomButton;