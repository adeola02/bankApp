import React, { useState } from 'react';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  align-items: center;

  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  h2{
    font-weight: 600;
  }
`;

const OTPContainer = styled.div`
  display: flex;
  /* background: #000; */
  flex-direction: column;
  width: 20vw;
  height: 20vh;
  gap: 3rem;
  /* align-items: center; */
  justify-content: center;
  /* justify-content: space-between; */
  /* margin-bottom: 20px; */
`;

// const OTPInput = styled.input`
//   width: 60px;
//   height: 60px;
//   text-align: center;
//   font-size: 24px;
//   border: 2px solid #ccc;
//   border-radius: 5px;
//   outline: none;

//   &:focus {
//     border-color: #007bff;
//   }
// `;

const PINContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Verification = () => {
  const [otp, setOTP] = useState('');
  const [pin, setPIN] = useState('');

  // const handleOTPChange = (index, value) => {
  //   if (!isNaN(value)) {
  //     const newOTP = [...otp];
  //     newOTP[index] = value;
  //     setOTP(newOTP);
  //   }
  // };
const nav =useNavigate(); 
  const handlePINChange = (event) => {
    setPIN(event.target.value);
  };

  const handleOtp=(e)=>{
    setOTP(e.target.value)
    console.log(otp)
  }

  return (
    <Container>
      <h2>Create your pin</h2>
      <OTPContainer>
      <OtpInput
          
          value={otp}
          numInputs={4}
          onChange={setOTP}
          renderSeparator={<span> </span>}
          inputType="tel"
          containerStyle={{display : "flex",justifyContent:"space-between",alignItems:"center"}}
          inputStyle={{ width : "3.5rem ", fontSizeAdjust : "20px",  height: "4rem"}}
          renderInput={(props) => <input {...props} className='otp-input' />}
          />
       
      
      </OTPContainer>
      <PINContainer>
        {/* <PINInput
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={handlePINChange}
        /> */}
        <Button onClick={()=>nav("/")}>Create pin</Button>
      </PINContainer>
    </Container>
  );
};

export default Verification;
