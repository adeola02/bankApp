import styled from 'styled-components'
import card from '../../assets/images/card.png'
import card2 from '../../assets/images/card2.png'  


export const CardBody=styled.div`
width: 80vw;
height:100%;
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
export const Cards=styled.div`
width: 100%;
height: 40%;
background: white;
display: flex;
align-items: center;
justify-content: center;
`
export const Card=styled.div`
width: 40%;
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
export const CardBack=styled.div`
width: 40%;
height: 90%;
/* background: url(${card}); */
border-radius: 20px;
margin-left:30px;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
align-items: center;

img{
    width:100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
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
