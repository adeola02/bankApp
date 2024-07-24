import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";
import {
  MainBody,
  Mainwrapper,
  SignUpForm,
  SignUpWrapper,
  Logo,
  HeroDiv,
  CreateAcct,
  InputDiv,
  Label,
  Input,
  Button,
  Text,
} from "../Auth/Auth";
import LogoImg from "../../assets/images/logo.png";
import hero from "../../assets/images/hero.png";
import LoadingScreen from "./LoadingScreen";

const Login = () => {
  const [email, setEmail]=useState();
  const[emailError, setEmailError]=useState();
  const [emailShowError, setEmailShowError]=useState(false);
  const [password, setPassword]=useState();
  const [showPassword, setShowPassword]=useState(true);
  const [toggle,setToggle] = useState(true);

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange=(e)=>{
    const newEmail=e.target.value;
    setEmail(newEmail);

    if(newEmail.trim() === ""){
      toast.error("Email is required");
      setEmailShowError(false);
    }else if (!validateEmail(newEmail)){
      setEmailShowError(true);
      setEmailError("invalid email format")
    }else{
      setEmailError("")
    };

  }

const handlePassword =(e)=>{
  const newData = e.target.value;
  setPassword(newData);
  if(newData.trim() ===""){
    toast.error("Password is required")
  }
};

  useEffect(()=>{
    setTimeout(() => {
      setToggle(false);
     }, 2500);
  },[])

  const nav = useNavigate();

 
 
  return (
  <>
  {
    toggle ? <LoadingScreen/>:
    <>
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
              <h2>Login</h2>{" "}
            </CreateAcct>
            <InputDiv>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Enter email"
                Hg onChange={handleEmailChange}
              />
              {emailShowError ? (
                <p style={{color:"red", margin:"0px", padding:"0px"}}>{emailError}</p>
              ):null}
              
            </InputDiv>
            <InputDiv>
              <Label>Password</Label>
              <Input
                Hg
                type="Password"
                placeholder="Enter Password"
                onChange={handlePassword}
              />
            </InputDiv>
            
            <Button Bg onClick={() => nav("/homePage")}>
              Login
            </Button>
            <Text>
              <span onClick={() => nav("/ResetPassword")}>Forget password.?</span>
            </Text>
            <Text>You do not have an account.?   
              <span onClick={() => nav("/signUp")}>Sign Up</span>
            </Text>
          </SignUpWrapper>
        </SignUpForm>
      </Mainwrapper>
    </MainBody>
    </>
  }
  </>
  
  );
};

export default Login;
