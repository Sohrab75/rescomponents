import React, { forwardRef } from "react";
import styled from "styled-components"

const StyledInput = styled.div`
    width:auto;
    height:32px;
    display:flex;
    border:${(props)=>props.isWarning?"1px solid yellow":props.isError?"1px solid red":"1px solid #000"};
    background-color:${(props)=>props.disabled?"#e1e1e1": "#fff"};
    input{
        width:100%;
        height:31px !important;
        padding:0;
        background-color:#fff;
        border:none;
        outline:none;
        :disabled{
            background-color:#e1e1e1; 
        }
        :focus{
            outline:none;
        }
    }
    span{
        height:31px;
        background-color:${(props)=>props.disabled?"#e1e1e1": "#dbdbdb"};
    }
`;

const CustomInput = forwardRef((props, ref) => {
    const handleChange = (e) => {
        // Pass the event and its value to the parent onChange handler
        props.onChange && props.onChange(e.target.value);
      };
    const handleBlur = (e)=>{
        props.onBlur && props.onBlur(e);
    }
    console.log("check ref>>>0", ref)
    return(
        <>
            <StyledInput isWarning={props.isWarning} isError={props.isError} disabled={props.disabled}>
                <input type="number" value={props.value} onChange={handleChange} onBlur={handleBlur} ref={ref}/>
                <span>clear</span>
            </StyledInput>
        </>
    );
});
export default CustomInput;