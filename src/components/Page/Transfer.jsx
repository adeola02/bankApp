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

const Transfer = () => {
  const [showPin, setShowPin] = useState(false);
  const [otp, setOtp] = useState("");

  const handleTransfer = () => {
    console.log("my pin is", otp);
    alert("Transaction Successful"); // Alert when transfer button is clicked
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
      <form action="# ">

        <InputDiv>
          <Label>Account name*</Label>
          <Input type="text" placeholder="Account name" required />
        </InputDiv>
        <InputDiv>
          <Label>Amount*</Label>
          <Input type="text" placeholder="Amount" required />
        </InputDiv>
        <InputDiv>
          <Label>Description*</Label>
          <Input type="text" placeholder="Description" required/>
        </InputDiv>
        <Button onClick={() => setShowPin(true)} type="submit">Done</Button>
      </form>
        {showPin && (
          <PinDiv>
            <OtpInput
              value={otp}
              numInputs={4}
              onChange={setOtp}
              renderSeparator={<span> </span>}
              inputType="tel"
              containerStyle={{ display: "unset" }}
              inputStyle={{ width: "3.5rem ", fontSizeAdjust: "20px", height: "4rem" }}
              renderInput={(props) => <input {...props} className='otp-input' />}
            />
            <SendDiv>
              <Button onClick={handleTransfer}>Transfer</Button>
            </SendDiv>
          </PinDiv>
        )}
      </InputDivHolder>
    </TransferBody>
  );
};

export default Transfer;
