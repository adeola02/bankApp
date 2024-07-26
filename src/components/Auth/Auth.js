import styled from 'styled-components'

export const MainBody = styled.div`
width: 100vw;
height: 100vh;
background: white;
display: flex;
align-items: center;
justify-content: center;
`

export const Mainwrapper = styled.div`
width: 100%;
height:100%;
background: white;
display: flex;
padding: 1rem;
`
export const HeroDiv =styled.div`
width:50%;
height:100%;
background: lightblue;
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 10px;
span{
    font-size: 3rem;
    color: #2860aa;

}
h2{
    margin-top: 50px;
    font-family: 'Poppins';
    font-size: 30px;
    color: #757ed6;


}
div{
width: 100%;
height: 70%;
padding-left: 9rem;
img{
    width: 90%;
    height: 100%;
}
}
`
export const SignUpForm=styled.div`
width:50%;
height:100%;
background: white;
display: flex;
align-items: center;
justify-content: center;
`
export const SignUpWrapper = styled.div`
width: 60%;
height:max-content;
background: white;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

padding: 10px;
display: flex;
flex-direction: column;
gap: 12px;
justify-content: center;
align-items: center;
`
export const Logo=styled.div`
width: 100%;
height: 3rem;
/* background: #000; */
display: flex;
justify-content: center;

div{
    width: 2rem;
    height: 2rem;
    background: #000;
    /* border: 0.5px solid gray; */
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    img{
        width: 100%;
        height: 100%;
    }
}
`
export const CreateAcct =styled.div`
width: 100%;
display: flex;
justify-content: center;

h2{
    font-family: Arial, Helvetica, sans-serif;
}
`

export const Button =styled.button`
width: 100%;
height: 35px;
background: ${({Bg})=>( Bg ? "#8d4cfc":"white")};
border: ${({Bg})=>(Bg ? "none":"1px solid rgba(128, 128, 128, 0.452)")};
color:${({Bg})=>(Bg ? "white":"")};
font-size: 15px;
font-weight: 550;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;

&:hover{
    cursor: pointer;
}
`
export const Or = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const InputDiv = styled.div`
width: 100%;
height: max-content;
`
export const PassWordDiv=styled.div`
width:100%;
height: 35px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
`
export const Input=styled.input`
width:${({Bg})=>Bg?"90%":"100%"};
height: 35px;
padding: ${({Bg})=>Bg?"0px":"10px"};
background: ${({Bg})=>Bg?"transparent":"white"};
border: ${({Bg})=>Bg?"none": "1px solid gray"};
border-radius: 5px;
outline: ${({Bg})=>Bg?"none":"0.9px "};
`
export const Label = styled.label``
export const Text = styled.div`

span{
  color: blue;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        transition: all 350ms ease-in-out;
    }
}
`
export const Hr = styled.hr`
height: 1px;
width: 45%;

`
export const PasswordInfo=styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: wrap;
`
export const Savings= styled.div`
width: 100%;
display: flex;
flex-direction: column;

h5{
    font-size:15px;
    font-weight: 350;
}
div{
    display: flex;
    align-items: center;
    gap: 2px;
}
`
export const InputGender=styled.input`

`