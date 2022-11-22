import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, SubmitButton, SubmitButtonBlack } from "ui";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";
import * as api from "../../apicache/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const history = useHistory();
  const onLogin = () => {
    api.login.signIn(email, password);
    history.push("/home");
  };
  const handleFindPassword = () => {
    window.alert("Implement Find Password page");
  };

  return (
    <PageBorder>
      <InputContainer>
        <Head>Welcome back Badger</Head>
        <Logo></Logo>
        <InputBox
          placeholder="Email"
          type="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputBox>
        {<br></br>}
        <InputBox
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputBox>
        <Checkbox onClick={(e) => setRemember(!remember)}>Remember Me</Checkbox>
        <SubmitBtn onClick={onLogin}>Log In</SubmitBtn>
        <SubmitBtnBlack onClick={handleFindPassword}>
          Forgot Password?
        </SubmitBtnBlack>
      </InputContainer>
    </PageBorder>
  );
};

export default Login;

const Logo = styled.div`
  width: 50px;
  height: 50px;

  background: black;
  border-radius: 40px;
  margin-bottom: 10%;
`;

const SubmitBtn = styled(SubmitButton)`
  margin-top: 5%;
  width: 85%;
  margin-bottom: 3%;
  height: 35px;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  margin-bottom: 5%;
  height: 35px;
`;

const Head = styled.h1`
  height: 30px;
  margin-bottom: 40px;
  font-family: "Spartan";
  font-style: normal;

  text-align: center;

  color: #1a1a1a;
`;

const PageBorder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  background: #f8f7f5;
  border-radius: 10px;
`;

const InputBox = styled(Input)`
  width: 85%;
  height: 35px;
  margin-bottom: 5%;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_text_light} !important;
    transition: border-color 0.3s;
  }

  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    transition: border-color 0.3s;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.color_text_placeholder};
  }
`;
