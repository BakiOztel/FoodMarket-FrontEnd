import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box ;
        font-family: 'Open Sans', sans-serif;
    }
`;

//                  HEADER              //
export const HomeNavbar = styled.header`
    display: flexbox;
    justify-content:space-between ;
    align-items:center;
    width:100% ;
    border-bottom  :1px solid rgba(0,0,0,0.2);
    height:80px;
    padding:15px;
`;
export const LogoLink = styled(Link)`
    text-decoration: none;
`
export const Logo = styled.img`
    width:250px ;
    height:100% ;
    object-fit:cover;
`;

export const LoginRegisterheader = styled.div`
    margin-right:75px;
    
`;
export const HomeHeaderButton = styled.button`
    margin-right:12px ;
    width: ${props => props.inputWidth || "120px"} ;
    height: ${props => props.inputHeight || "50px"} ;
    border: unset;
    position:relative ;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: ${props => props.inputColor || "#FFA1C9"};
    font-weight: 1000;
    font-size: 14px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms;
    overflow: hidden;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #FBE5E5;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }
    &:hover{
        color: #212121;
    }
    &:hover::before{
        width:100% ;
    }
`;
//           HOME HEADER FINISH           //

//           HOME BODY  START             //

export const HomeV1 = styled.div`
    width:100% ;
    height:900px;
    position:relative ;

`;

export const HomeV2 = styled.div`
    width:700px ;
    height:500px ;
    padding-top:100px ;
    top:200px;
    right:100px;
    position:absolute ;
    color:white;
    &>div {
        width:100% ;
        height:25% ;
        display:flexbox ;
        align-items:center ;
        justify-content:center ;

    }
    & > h1{
        font-weight:Bold ;
    }
`;

export const HomeImg = styled.img`
    height:100% ;
    width:100% ;
    object-fit:cover;
`;



//          HOME FOOTER START            //
export const FooterDiv = styled.div`
    display:flexbox ;
    width:100% ;
    height:200px;
    padding: 0px 300px 0px 300px;
    background-color: #FBE5E5;
    justify-content:space-between;
`;

export const FooterNav = styled.ul`

    list-style-type:none ;
`;
export const FooterItems = styled.li`

        margin-bottom:8px;

`;

export const FooterLink = styled(Link)`

        text-decoration:none;
        color:black ;
`;



//          LOGİN / REGİSTER PAGE          //


export const LoginRegisterPage = styled.div`

    height:85vh;
    display:flexbox ;
    align-items:center ;
    justify-content:center ;

`;
export const LoginRegisterDiv = styled.div`
        height:500px;
        width:500px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        &>h2{
        text-align: center;
    }
`;

export const LoginRegisterForm = styled.form`
    height:400px ;
    width:400px;
    margin:auto ;
    &>button{
        margin-top:50px;
        margin-left:75px;
        width:250px;
    }
    &> a > button{
        margin-top:25px;
        margin-left:100px;
        width:200px;
    }
`;
export const LoginRegisterBox = styled.div`
    position: relative;
    &>input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid;
        outline: none;
        background: transparent;
    }
    &>label{
        position: absolute;
        padding: 13px 0;
        top:0;
        left:0;
        font-size: 20px;
        color:rgb(180, 180, 180);
        pointer-events: none;
        transition: .5s;    
    }
    &>input:focus ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 12px;
    }
    &>input:valid ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 15px;
    }
    input:not(:placeholder-shown) ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 15px;
    }

`;

