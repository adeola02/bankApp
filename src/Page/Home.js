import styled from "styled-components";
import card from '../assets/images/card.png'

export const HomePageBody=styled.div`
width: 80vw;
height: 100vh;
background: white;
`
export const HomePageTop=styled.div`
width: 100%;
height: 20%;
background: white;
`
export const HomeTop=styled.div`
width: 100%;
height: 40%;
background: white;
display: flex;
justify-content: flex-end;

div{
    width: 20%;
    height:100%;
    background:white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    nav{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
}
`
export const HomeBottom=styled.div`
width: 100%;
height: 60%;
background-color: white;
display: flex;
align-items: center;
padding-left:20px;
`
export const HomeContent=styled.div`
display: flex;
width: 100%;
height: 40%;
background: teal;
`
export const Balance=styled.div`
width: 50%;
height: 100%;
background: white;
`
export const CardDiv=styled.div`
width: 50%;
height: 100%;
background: white;
`
export const AccountBal=styled.div`

`
export const MoneyInOut=styled.div`
width: 100%;
height: 80px;
background: #000;
display: flex;
`
export const Button=styled.button`
width: 250px;
height:50px;
border-radius: 30px;
border:none;
margin-top: 20px;
font-size: 20px;
font-weight:600;

&:hover{
    cursor: pointer;
    background: rgb(240,360,999);
    transition:all 350ms ease-out;
}

`
export const MoneyProgress=styled.div`
width: 50%;
height: 100%;
background-color: white;
display: flex;
align-items: center;

nav{
    width: 50px;
    height: 50px;
    background:  green;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.nav{
    width: 50px;
    height: 50px;
    background:  #ffc0cbbb;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
aside{
    width: 80%;
    height: 100%;
    background: white;
    padding-left: 10px;
}
`
export const Card=styled.div`
width: 80%;
height: 90%;
background: url(${card});
border-radius: 20px;
margin-left:30px;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
align-items: center;
`
export const CardTop=styled.div`
width: 90%;
height: 40%;
/* background-color: antiquewhite; */
display: flex;
flex-direction: column;
justify-content: space-between;

div{
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
}
aside{
    padding-left: 2rem;
    padding-bottom: 2rem;
    font-size: 2rem;
}
`
export const CardBottom=styled.div`
width: 90%;
height: 40%;
/* background-color: firebrick; */
display: flex;
align-items: center;
justify-content: space-between;
div{
    font-size: 20px;
}
aside{

}

`
export const OtherHomeMenus=styled.div`
width: 50%;
height: 40%;
background: honeydew;
`
export const Menus=styled.div`
width: 90%;
height: 90%;
/* background-color: aquamarine; */
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 1rem;
nav{
    width: 25%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items:center;
}
`
