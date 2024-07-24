import styled from 'styled-components'

export const TransferBody=styled.div`
width: 80%;
height: 100vh;
/* background:black; */
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
export const HomePageTop=styled.div`
width: 100%;
height: 20%;
background: white;
`
export const AvailableBal=styled.div`
width: 100%;
height: 15%;
/* background-color: #dadbe785; */
display: flex;
align-items: center;
justify-content: center;

h3{
    font-size: 40px;
    font-weight: 500;
}
`
export const InputDivHolder=styled.div`
width: 100%;
height: 65%;
background-color: #6c76e2f5;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
/* justify-content: center; */
/* align-items: center; */
`
export const Label = styled.label``

export const Input=styled.input`
width:50%;
height: ${({Hg})=>(Hg? "55px": "35px")};
padding: 10px;
`
export const InputDiv=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const Button=styled.button`
width: 5rem;
height: 2rem;
`
export const PinDiv=styled.div`
width:30rem;
height: 300px;
background: white;
`

export const SendDiv=styled.div`
display:flex;
justify-content: center;
align-items: center;
`