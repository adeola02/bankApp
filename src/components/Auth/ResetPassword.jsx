import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateAcct, HeroDiv, Logo, MainBody, Mainwrapper, SignUpForm, SignUpWrapper, InputDiv, Input, Label, Button} from "../Auth/Auth"
import LogoImg from "../../assets/images/logo.png";
import hero from '../../assets/images/hero.png'
import {toast, Toaster} from 'react-hot-toast';

const ResetPassword = () => {


    const nav=useNavigate()
  return (
    <MainBody>
      <Toaster/>
        <Mainwrapper>
            <HeroDiv>
            <h2>Safe,simple, and smart banking.<br/><span>NiviQ</span> -The future is here</h2>
          <div>
            <img src={hero} alt="" />
          </div>
            </HeroDiv>
                <SignUpForm>
                    <SignUpWrapper>
                        <Logo>
                        {" "}
                  <div>
                    <img src={LogoImg} alt="" />
                  </div>{" "}
                        </Logo>
                        <CreateAcct>
                            <h2>Reset Password</h2>
                        </CreateAcct>
                        <InputDiv>
                  <Label>Email</Label>
                  <Input type="text" placeholder="Enter email" Hg />
                </InputDiv>
                <InputDiv>
                  <Label>Reset Password</Label>
                  <Input type="Password" placeholder="Enter New Password" Hg />
                </InputDiv>
                <InputDiv>
                  <Label>Confirm Password</Label>
                  <Input type="Password" placeholder="Confirm New Password" Hg />
                </InputDiv>
                <Button Bg onClick={()=>nav("/Login")}>
                  Reset Password
                </Button>
                    </SignUpWrapper>
                </SignUpForm>
           
        </Mainwrapper>

    </MainBody>
  )
}

export default ResetPassword