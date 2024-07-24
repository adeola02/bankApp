import styled from 'styled-components'

export const TransactionBody=styled.div`
width: 80%;
height: 100vh;
background: #5e66b483;
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
export const MoneyInAndOut=styled.div`
width: 100%;
height: 70px;
background-color: aqua;
display: flex;
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
    background: green;
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
export const Transactions=styled.div`
width: 100%;
height: auto;
overflow-y:auto;
flex-direction: column;
gap: 5px;
display: flex;
`
export const TransactionDiv=styled.div`
width: 100%;
height: 60px;
padding: 5px;
display: flex;
background-color: white;
justify-content: space-between;
`
export const Action=styled.div`
width: 30%;
height: 100%;
background-color:white;
display: flex;
gap: 5px;
font-size: 25px;
align-items: center;
padding-left: 10px;
`
export const Amount=styled.div`
width: 30%;
height: 100%;
background-color:white;
display: flex;
align-items: center;
font-size: 23px;
justify-content: flex-end;
padding-right: 10px;
`
export const Date=styled.div`
width: 30%;
height: 100%;
background-color:white;
display: flex;
align-items: center;
font-size: 23px;
justify-content:center;
`
