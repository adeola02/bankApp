import React from "react";
import { TransactionBody, HomePageTop, HomeTop, HomeBottom,MoneyInAndOut,MoneyProgress,Transactions,TransactionDiv ,Action,Amount,Date} from "./Trans";
import { MdOutlineSettings, MdOutlineChatBubbleOutline ,MdPaid} from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import {
    FaArrowUpLong,
    FaArrowDownLong,
  } from "react-icons/fa6";


const Transaction = () => {
  return (
    <TransactionBody>
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
          <h1>Good morning,Martha</h1>
        </HomeBottom>
      </HomePageTop>
      <MoneyInAndOut>
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
              <nav>
                <FaArrowDownLong />
              </nav>
              <aside>
                <p>Money Out</p>
                <h4>$345364</h4>
              </aside>
            </MoneyProgress>
      </MoneyInAndOut>
      <Transactions>
        <TransactionDiv>
            <Action>
            <MdPaid />
            sent money to Grace
            </Action>
            <Date>today</Date>
            <Amount>
                $500
            </Amount>
        </TransactionDiv>
      </Transactions>
    </TransactionBody>
  );
};

export default Transaction;
