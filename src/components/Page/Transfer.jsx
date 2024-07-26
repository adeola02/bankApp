import React, { useState } from "react";
import {
  TransferBody,
  HomePageTop,
  HomeTop,
  HomeBottom,
  AvailableBal,
  InputDiv,
  Label,
  Input,
  InputDivHolder,
  Button,
  PinDiv,
  SendDiv
} from "./Transfers";
import { MdOutlineSettings, MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import OtpInput from 'react-otp-input';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Transfer = () => {
  const [showPin, setShowPin] = useState(0);
  const [otp, setOtp] = useState("");
  const [fullname,setFullName] = useState("");
  const [amount,setAmount] = useState("");
  const [desc,setDesc]=useState("");
  const userId=useSelector((state)=>state.bankAppStore.user._id)
  // console.log(userId)

  const handleTransfer = () => {
    console.log("transferring")
    const url =`https://bank-app-z92e.onrender.com/transfer/${userId}`
    const data={fullname,amount,description:desc,pin:Number(otp)}
   axios.post(url,data)
   .then((res)=>{
    console.log(res)
   })
   .catch((error)=>{
    console.log(error)
   })
  };

  return (
    <TransferBody>
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
          <h1>Welcome, Martha</h1>
        </HomeBottom>
      </HomePageTop>
      <AvailableBal>
        <h3>
          Available Bal:<span>$3635</span>
        </h3>
      </AvailableBal>
      <InputDivHolder>


        <InputDiv>
          <Label>Account name*</Label>
          <Input type="text" placeholder="Account name" required onChange={(e)=>setFullName(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <Label>Amount*</Label>
          <Input type="number" placeholder="Amount" required onChange={(e)=>setAmount(e.target.value)}/>
        </InputDiv>
        <InputDiv>
          <Label>Description*</Label>
          <Input type="text" placeholder="Description" required onChange={(e)=>setDesc(e.target.value)}/>
        </InputDiv>
        <Button onClick={() => setShowPin(1)} >Done</Button>

        {showPin === 1 ? (
          <PinDiv>
            <OtpInput
              value={otp}
              numInputs={4}
              onChange={setOtp}
              renderSeparator={<span> </span>}
              inputType="tel"
              containerStyle={{ display: "unset" }}
              inputStyle={{ width: "3.5rem ", fontSizeAdjust: "20px", height: "4rem" }}
              renderInput={(props) => <input {...props} className='otp-input' /> }
            />
            <SendDiv>
              <Button onClick={handleTransfer}>Transfer</Button>
            </SendDiv>
          </PinDiv>
        ) : null}
      </InputDivHolder>
    </TransferBody>
  );
};

export default Transfer;
