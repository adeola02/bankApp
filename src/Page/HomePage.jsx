import React, { useEffect, useState } from "react";
import {
  HomePageBody,
  HomePageTop,
  HomeTop,
  HomeBottom,
  HomeContent,
  Balance,
  CardDiv,
  AccountBal,
  MoneyInOut,
  Button,
  MoneyProgress,
  Card,
  CardTop,
  CardBottom,
  OtherHomeMenus,
  Menus,
} from "./Home";
import {
  FaArrowUpLong,
  FaArrowDownLong,
  FaFaceGrinTongueWink,
} from "react-icons/fa6";
import {
  MdMobiledataOff,
  MdCallEnd,
  MdOutlineCardGiftcard,
  MdElectricBolt,
  MdAtm,
  MdFlight,
  MdOutlineSettings,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";
import { GrGamepad, GrPaypal } from "react-icons/gr";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { SiCashapp } from "react-icons/si";
import { AiTwotoneInsurance } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

const HomePage = ({ setShowDiv }) => {
  const [userData, setUserData] = useState();
  console.log(userData);
  // console.log(id);
  const user = useSelector((state) => state.bankAppStore.user);
  console.log(user);

  const handleUser = () => {
    const url = `https://bank-app-z92e.onrender.com/comingIn/${user._id}`;
    axios
      .post(url)
      .then((res) => {
        console.log(res)
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    handleUser();
  },[])

  return (
    <HomePageBody>
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
          <h1>Hello,{user.fullname}</h1>
        </HomeBottom>
      </HomePageTop>
      <HomeContent>
        <Balance>
          <h3>Account balance</h3>
          <AccountBal>
            <h1>${user.accountBalance}</h1>
          </AccountBal>
          <MoneyInOut>
            <MoneyProgress>
              <nav>
                <FaArrowUpLong />
              </nav>
              <aside>
                <p>Money In</p>
                <h4>$345364</h4>
              </aside>
            </MoneyProgress>
            <MoneyProgress>
              <nav className="nav">
                <FaArrowDownLong />
              </nav>
              <aside>
                <p>Money Out</p>
                <h4>$345364</h4>
              </aside>
            </MoneyProgress>
          </MoneyInOut>
          <Button onClick={() => setShowDiv(4)}>transfer</Button>
        </Balance>
        <CardDiv>
          <h3>Credit card</h3>
          <Card>
            <CardTop>
              <div>
                <nav>
                  <img src="" alt="" />
                </nav>
                <span>Mastercard</span>
              </div>
              <aside>**** **** **** 4253</aside>
            </CardTop>
            <CardBottom>
              <div>Martha Igben</div>
              <aside>09/27</aside>
            </CardBottom>
          </Card>
        </CardDiv>
      </HomeContent>
      <OtherHomeMenus>
        <h3>Services</h3>
        <Menus>
          <nav>
            <MdMobiledataOff />
            data
          </nav>
          <nav>
            <MdCallEnd />
            airtime
          </nav>
          <nav>
            <GrGamepad />
            betting
          </nav>
          <nav>
            <MdElectricBolt />
            electricity
          </nav>
          <nav>
            <PiTelevisionSimpleBold />
            television
          </nav>
          <nav>
            <MdOutlineCardGiftcard />
            gift
          </nav>
          <nav>
            <SiCashapp />
            cash box
          </nav>
          <nav>
            <FaFaceGrinTongueWink />
            refer&earn
          </nav>
          <nav>
            <MdAtm />
            Atm card
          </nav>
          <nav>
            <AiTwotoneInsurance />
            insurance
          </nav>
          <nav>
            <GrPaypal />
            pay bills
          </nav>
          <nav>
            <MdFlight />
            flights
          </nav>
        </Menus>
      </OtherHomeMenus>
    </HomePageBody>
  );
};

export default HomePage;
