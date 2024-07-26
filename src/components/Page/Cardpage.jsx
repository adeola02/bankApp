import React, { useState } from "react";
import { CardBody, HomePageTop, HomeTop,HomeBottom ,Cards,Card,CardTop,CardBottom,CardBack} from "./Cards";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSettings,MdOutlineChatBubbleOutline } from "react-icons/md";
import card from '../../assets/images/card2.png'

const CardPage = () => {
  const [cardNumber,setCardNumber]=useState();

  const handleNumber=()=>{
    const url = `https://bank-app-z92e.onrender.com/createCardNumber`
  }
  return (
    <CardBody>
      <HomePageTop>
        <HomeTop>
          <div>
            <nav>
              <MdOutlineSettings />
            </nav>
            <nav>
              <MdOutlineChatBubbleOutline />
            </nav>
            <nav>
              <FaRegUserCircle />
            </nav>
          </div>
        </HomeTop>
        <HomeBottom>
          <h1>Your Card,Martha</h1>
        </HomeBottom>
      </HomePageTop>
      <Cards>
      <Card>
            <CardTop>
              <div>
                <nav></nav>
                <span>Mastercard</span>
              </div>
              <aside>3344 4654 6765 4253</aside>
            </CardTop>
            <CardBottom>
              <div>Martha Igben</div>
              <aside>09/27</aside>
            </CardBottom>
          </Card>
      </Cards>
      <Cards>
      <CardBack>
            <img src={card} alt="" />
          </CardBack>
      </Cards>
    </CardBody>
  );
};

export default CardPage;
