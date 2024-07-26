import React, { useState } from "react";
import {
  TransactionBody,
  HomePageTop,
  HomeTop,
  HomeBottom,
  MoneyInAndOut,
  MoneyProgress,
  Transactions,
  TransactionDiv,
  Action,
  Amount,
  Date,
} from "./Trans";
import { MdOutlineSettings, MdOutlineChatBubbleOutline, MdPaid } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'in', action: 'received money from John', date: 'today', amount: 200 },
    { id: 2, type: 'out', action: 'sent money to Grace', date: 'today', amount: 500 },
    { id: 3, type: 'in', action: 'received money from Sarah', date: 'yesterday', amount: 150 },
    { id: 4, type: 'out', action: 'sent money to Michael', date: 'yesterday', amount: 300 },
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleMoneyIn = () => {
    const filtered = transactions.filter(transaction => transaction.type === 'in');
    setFilteredTransactions(filtered);
  };

  const handleMoneyOut = () => {
    const filtered = transactions.filter(transaction => transaction.type === 'out');
    setFilteredTransactions(filtered);
  };

  const handleTransaction=()=>{
    
  }

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
          <h1>Good morning, Martha</h1>
        </HomeBottom>
      </HomePageTop>
      <MoneyInAndOut>
        <MoneyProgress onClick={handleMoneyIn}>
          <nav>
            <FaArrowUpLong />
          </nav>
          <aside>
            <p>Money In</p>
            <h4>$345364</h4>
          </aside>
        </MoneyProgress>
        <MoneyProgress onClick={handleMoneyOut}>
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
        {filteredTransactions.map(transaction => (
          <TransactionDiv key={transaction.id}>
            <Action>
              <MdPaid />
              {transaction.action}
            </Action>
            <Date>{transaction.date}</Date>
            <Amount>${transaction.amount}</Amount>
          </TransactionDiv>
        ))}
      </Transactions>
    </TransactionBody>
  );
};

export default Transaction;
