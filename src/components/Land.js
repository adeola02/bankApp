import styled from 'styled-components'

export const LandBody=styled.div`
width: 100vw;
height: 100vh;
display: flex;
overflow: hidden;
/* background: #000; */
`
export const LandMenu=styled.div`
width: 20vw;
height: 100vh;
background: white;
`
export const BankNameDiv=styled.div`
width: 100%;
height: 20%;
background: lightblue;

div{
    width: 100%;
    height: 50%;
   display: flex;
   align-items: center;
   padding-left:20px;

    aside{
        width: 3rem;
        height: 3rem;
        /* background: red; */
        display:flex;
        align-items: center;
        justify-content: center;

        img{
          width:90%;
        }
    }

    span{
      font-size: 30px;
      color:#757ed6;
      font-family: Poppins;
    }
}
`

export const MenuBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: #fff;

  ol {
    width: 100%;
    height: 100%;
    font-size: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 3px;

    li {
      display: flex;
      gap: 20px;
      margin-top: 20px;

      &:hover{
        cursor: pointer;
      }
    }
}
`;
