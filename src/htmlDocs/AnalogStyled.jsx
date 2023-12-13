import styled from "styled-components";
import clockImage from "../images/clock-img.png"
const AnalogStyled = styled.div`
    /* margin:100px; */
    transform: rotate(0deg);
    .top-circle{
        width:50px;
        height:50px;
        border:1px solid black;
        border-radius: 50%;
        position:relative;
        /* background-image: url(${clockImage}); */
        /* background-repeat: no-repeat; */
        /* background-size: 80% 80%; */
        .clock-img{
            width: 50px;
            height: 50px;
            border-radius:50%;
        }
        .hands-group{
            position: absolute;
            top: 50%;
            left:50%;
            transform: rotate(-90deg);
        }
        .center-point{
            position:absolute;
            height:3px;
            width:3px;
            background-color: red;
            border-radius:50%;
            top:49%;
            left:49%;
        }
        .hour-line{
            position:absolute;
            width: 10px;
            height: 1px;
            top: 50%;
            left: 50%;
            background-color: black;
            transform-origin: top left;
            /* transform: rotate(60deg); */
        }
        .minute-line{
            position:absolute;
            width: 20px;
            height: 1px;
            top: 50%;
            left: 50%;
            background-color: red;
            transform-origin: top left;
            /* transform: rotate(30deg); */
        }
        .second-line{
            position:absolute;
            width: 25px;
            height: 1px;
            top: 50%;
            left: 50%;
            background-color: purple;
            transform-origin: top left;
            /* transform: rotate(40deg); */
        }
    }
`;

export default AnalogStyled;