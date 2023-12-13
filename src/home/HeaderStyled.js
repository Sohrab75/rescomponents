import styled from "styled-components";

const StyledHeader =styled.header`
    .navigation{
        background-color: #4cB5F5;
        display: flex;
        justify-content: space-between;
        .items{
            list-style: none;
            display: flex;
            justify-content: space-around;
            margin-bottom: 0;
            padding: 10px 15px;
            gap: 5px;
            .list_menu_item{
                padding:10px;
                border:1px solid #000;
                border-radius: 25px;
            }
            .list_menu_item:hover{
                border:1px solid red;
                background-color: #007672;
                cursor:pointer;
            }
        }
        .menu_item{
            
        }
    }
`;
export default StyledHeader;