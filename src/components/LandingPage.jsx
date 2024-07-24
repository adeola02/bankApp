import React, { useState } from "react";
import { LandBody, LandMenu, BankNameDiv, MenuBox, } from "./Land";
import { FaHome, FaCcMastercard, FaGetPocket } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import HomePage from "../Page/HomePage";
import CardPage from "./Page/Cardpage";
import Transaction from "./Page/Transaction";
import Transfer from "./Page/Transfer";
import LoanPage from "./Page/LoanPage";
import LogoImg from "../assets/images/logo.png";
import { Cards } from "./Page/Cards";


const LandingPage = () => {
    
  const [showDiv,setShowDiv] = useState(0);
  return (
    <LandBody>
      <LandMenu>
        <BankNameDiv>
            <div> <aside>
            <img src={LogoImg} alt="" />
            </aside>
            <span>
              <h3>NiViQ</h3>
            </span></div>
        </BankNameDiv>
        <MenuBox>
          <ol>
            <li onClick={()=>setShowDiv(0)}>
              {" "}
              <FaHome />
              Home
            </li>
            <li onClick={()=>setShowDiv(1)}>
              <FaGetPocket />
              Loan
            </li>
            <li onClick={()=>setShowDiv(5)}>
              <FaCcMastercard />
              Card
            </li>
            <li onClick={()=>setShowDiv(3)}>
              <AiOutlineTransaction />
              Transactions
            </li>
            <li>
              <IoSettingsSharp />
              Settings
            </li>
          </ol>
        </MenuBox>
      </LandMenu>
      {
        showDiv === 0?
        <HomePage setShowDiv={setShowDiv}/> : showDiv === 1 ? <LoanPage/> : showDiv === 3?<Transaction/>:showDiv === 4 ?<Transfer/>:
        showDiv === 5 ? <CardPage/>:null

      }
    </LandBody>
  );
};

export default LandingPage;
