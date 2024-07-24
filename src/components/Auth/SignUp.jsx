import React, { useState } from "react";
import {
  MainBody,
  Mainwrapper,
  HeroDiv,
  SignUpForm,
  SignUpWrapper,
  Logo,
  CreateAcct,
  Button,
  Or,
  InputDiv,
  Label,
  Input,
  Text,
  Hr,
  PasswordInfo,
  Savings,
  InputGender,
} from "./Auth";
import LogoImg from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { CiCircleCheck } from "react-icons/ci";
import hero from "../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
const SignUp = () => {
  const [signUpUpdate, setSignUpUpdate] = useState(0);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [emailShowError, setEmailShowError] = useState(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordErrorLow, setPasswordErrorLow] = useState("");
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
  const [fullname, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [gender, setGender] = useState("");
  const [continueerror, setContinueerror] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [stateMan, setStateMan] = useState("");
  const [stateError, setStateError] = useState(false);
  const [savingsMethod, setSavingsMethod] = useState("");
  const [savingsMethodError, setSavingsMethodError] = useState(false);
  

  const nav = useNavigate();

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.trim() === "") {
      toast.error("Email is required");
      setEmailShowError(false);
    } else if (!validateEmail(newEmail)) {
      setEmailShowError(true);
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUppercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };

  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);

    if (newData.trim() === "") {
      toast.error("Password is required");
      setPasswordCheck(false);
    }
    if (newData.length > 0) {
      setPasswordCheck(true);
    }
    if (!containsLowercase(newData)) {
      setPasswordErrorLow(true);
    } else {
      setPasswordErrorLow(false);
    }
    if (!containsUppercase(newData)) {
      setPasswordErrorUpper(true);
    } else {
      setPasswordErrorUpper(false);
    }
    if (!containsNumber(newData)) {
      setPasswordErrorNumber(true);
    } else {
      setPasswordErrorNumber(false);
    }
    if (!containsSymbol(newData)) {
      setPasswordErrorSymbol(true);
    } else {
      setPasswordErrorSymbol(false);
    }
  };

  const handleDate = (e) => {
    const newData = e.target.value;
    setDateOfBirth(newData);
    setDateError(false);

    if (newData.trim() === "") {
      setDateError("date of birth is required");
    }
  };

  const handleNumber = (e) => {
    const newData = e.target.value;
    setPhoneNumber(newData);
    setPhoneNumberError(false);

    if (newData.trim() === "") {
      setPhoneNumberError("phone number is required");
    } else if (newData.length < 11) {
      setPhoneNumberError("must be up to 11 numbers");
    }
  };

  const handleSaving = (e) => {
    const newData = e.target.value;
    setSavingsMethod(newData);
    setSavingsMethodError(false);

    if (newData.trim() === "") {
      setSavingsMethodError("savings method is required");
    }
  };

  const handleState = (e) => {
    const newState = e.target.value;
    setStateMan(newState);
    setStateError(false);

    if (newState.trim() === "") {
      setStateError("state is required");
    }
  };

  const signCheck = () => {
    if (!email || !fullname || !password ) {
      console.log("required");
    } else {
      const url = "https://bank-app-z92e.onrender.com/signup";
      const datas = { email, fullname, password ,address:stateMan,dob:dateOfBirth,phoneNumber,gender:gender};
      axios
        .post(url, datas)
        .then((arr) => {
          console.log(arr);
          nav("/verify")
        })
        .catch((err) => console.log(err));
    }
  };

  const handleContinue = () => {
      if (!email) {
        toast.error("Email is required");
      }else if (!fullname) {
        toast.error("Fullname is required");
      } else if (!password) {
        toast.error("passowrd is required");
      }  else if(email || fullname || password) {
        setSignUpUpdate(1);
      }
    
  };
  return (
    <MainBody>
      <Toaster />
      <Mainwrapper>
        <HeroDiv>
          <h2>
            Safe,simple, and smart banking.
            <br />
            <span>NiviQ</span> -The future is here
          </h2>
          <div>
            <img src={hero} alt="" />
          </div>
        </HeroDiv>
        <SignUpForm>
          {signUpUpdate === 0 ? (
            <>
              <SignUpWrapper>
                <Logo>
                  {" "}
                  <div>
                    <img src={LogoImg} alt="" />
                  </div>{" "}
                </Logo>
                <CreateAcct>
                  <h2>Create Your Account</h2>{" "}
                </CreateAcct>
                <p style={{ textAlign: "center", color: "gray" }}>
                  Enter the fields below to get started
                </p>
                <Button>
                  <FcGoogle size={20} />
                  Sign in with google
                </Button>
                <Or>
                  <Hr />
                  or
                  <Hr />
                </Or>
                <InputDiv>
                  <Label>Fullname*</Label>
                  <Input
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullname}
                  />
                </InputDiv>
                <InputDiv>
                  <Label>Email address*</Label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  {emailShowError ? (
                    <p style={{ color: "red", margin: "0px", padding: "0px" }}>
                      {emailError}
                    </p>
                  ) : null}
                </InputDiv>
                <InputDiv>
                  <Label>Password*</Label>
                  <Input
                    type="password"
                    placeholder="Create a password"
                    onChange={handlePassword}
                  />
                </InputDiv>

                {passwordCheck ? (
                  <PasswordInfo>
                    {passwordErrorLow ? (
                      <span>
                        {" "}
                        <CiCircleCheck />
                        One lowercase character
                      </span>
                    ) : null}

                    {passwordErrorUpper ? (
                      <span>
                        {" "}
                        <CiCircleCheck />
                        One uppercase character
                      </span>
                    ) : null}

                    {passwordErrorNumber ? (
                      <span>
                        {" "}
                        <CiCircleCheck />
                        One number
                      </span>
                    ) : null}

                    {passwordErrorSymbol ? (
                      <span>
                        {" "}
                        <CiCircleCheck />
                        One special character
                      </span>
                    ) : null}
                  </PasswordInfo>
                ) : null}

                <Button Bg onClick={handleContinue}>
                  Continue
                </Button>

                <Text>
                  Already have an account.?{" "}
                  <span onClick={() => nav("/")}>Log In</span>
                </Text>
              </SignUpWrapper>
            </>
          ) : signUpUpdate === 1 ? (
            <>
              <SignUpWrapper>
                <Logo>
                  {" "}
                  <div>
                    <img src={LogoImg} alt="" />
                  </div>{" "}
                </Logo>
                <CreateAcct>
                  <h2>Create Your Account</h2>{" "}
                </CreateAcct>
                {/* <p style={{ textAlign: "center", color: "gray" }}>
                  Enter the fields below to get started
                </p>
                <Button>
                  <FcGoogle />
                  Sign in with google
                </Button> */}
                <InputDiv>
                  <Label>Date Of Birth*</Label>
                  <Input
                    type="date"
                    placeholder="Enter Date Of Birth/Month/Year"
                    onChange={handleDate}
                    value={dateOfBirth}
                  />
                  {dateError ? <p>{dateError}</p> : null}
                </InputDiv>
                <InputDiv>
                  <Label>Address*</Label>
                  <select onChange={handleState} value={stateMan}>
                    <option value=""></option>
                    <option value="abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>-
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Kastina">Kastina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                  </select>
                  {stateError ? <p>{stateError}</p> : null}
                </InputDiv>
                <InputDiv>
                  <Label>Phone Number*</Label>
                  <Input
                    type="Number"
                    placeholder="Enter Phone Number"
                    onChange={handleNumber}
                    value={phoneNumber}
                  />
                  {phoneNumberError ? <p>{phoneNumberError}</p> : null}
                </InputDiv>
                <InputDiv>
                  <Label>Gender*</Label>
                  <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </InputDiv>
                <Savings>
                  <h3>Method of Savings</h3>
                  <div>
                    <InputGender
                      type="radio"
                      name="pie"
                      onChange={handleSaving}
                      checked={savingsMethod === "savings"}
                      value="savings"
                    />
                    savings
                  </div>
                  <div>
                    <InputGender
                      type="radio"
                      name="pie"
                      onChange={handleSaving}
                      checked={savingsMethod === "current"}
                      value="current"
                    />
                    current
                  </div>
                </Savings>
                {savingsMethodError ? <p>{savingsMethodError}</p> : null}
                <Button Bg onClick={signCheck}>
                  Create Account
                </Button>
                <button onClick={()=>setSignUpUpdate(0)}>back</button>
                {/* <Text>
                  Already have an account.? <span onClick={()=>nav("/Login")} >Log In</span>
                </Text> */}
              </SignUpWrapper>
            </>
          ) : (
            2
          )}
        </SignUpForm>
      </Mainwrapper>
    </MainBody>
  );
};

export default SignUp;
