import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, SubmitButton, SubmitButtonBlack, Select } from "ui";
import { useHistory } from "react-router-dom";
import { useMajors } from "apicache";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [wiscEmail, setWiscEmail] = useState("");
  const [userMajors, setUserMajors] = useState([]);
  const [userKakaoId, setUserKakaoId] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userStanding, setUserStanding] = useState("");
  const [filledAllReq, setFilledAllReq] = useState(true);

  const history = useHistory();
  const { data: majorList } = useMajors();
  console.log(majorList);

  const check = () => {
    if (!wiscEmail.includes("@wisc.edu")) {
      window.alert("Please input valid WISC EMAIL");
      return false;
    }
    return (
      userName !== "" &&
      userPassword !== "" &&
      wiscEmail !== "" &&
      userMajors.length !== 0 &&
      userPhoneNumber !== "" &&
      userStanding !== ""
    );
  };

  const handleHaveAccount = () => {
    history.push("/login");
  };

  const handleOrgSignup = () => {
    history.push("/orgsignup");
  };

  const onSignup = () => {
    if (check()) {
      console.log("nice");
      history.push("/home");
    } else {
      setFilledAllReq(false);
    }
  };
  const handleMajorSelection = (value) => {
    let temp = [...userMajors];
    temp.push(value);
    setUserMajors(temp);
  };

  const generateOptions = () =>
    majorList.map((major) => (
      <Option key={major.id} value={major.name} label={major.name}>
        {major.name}
      </Option>
    ));

  return (
    <PageBorder>
      <InputContainer>
        <Head>Sign Up</Head>
        <InputBox
          placeholder="Name"
          type="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="WISC Email"
          type="email"
          value={wiscEmail}
          onChange={(e) => setWiscEmail(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="KakaoTalk ID"
          type="KakaoId"
          value={userKakaoId}
          onChange={(e) => setUserKakaoId(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="Phone Number"
          type="Phone"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        ></InputBox>
        <SelectBox
          mode="multiple"
          placeholder="Select your majors please"
          defaultValue={userMajors}
          onChange={handleMajorSelection}
          optionLabelProp="label"
        >
          {generateOptions()}
        </SelectBox>
        <SelectBox
          placeholder="Choose your standing"
          onSelect={(value) => setUserStanding(value)}
        >
          <Option value="Freshman">Freshman</Option>
          <Option value="Sophomore">Sophomore</Option>
          <Option value="Junior">Junior</Option>
          <Option value="Senior">Senior</Option>
        </SelectBox>
        {<div>{!filledAllReq && <div>please fill out the form</div>}</div>}
        <OrgSignup onClick={handleOrgSignup}>
          Sign up for Organization?
        </OrgSignup>
        <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
        <SubmitBtnBlack onClick={handleHaveAccount}>
          Already have an account?
        </SubmitBtnBlack>
      </InputContainer>
    </PageBorder>
  );
};

export default Signup;

const SelectBox = styled(Select)`
  margin-bottom: 6%;
  width: 85%;
  border-radius: 10px;
`;

const Option = styled(Select.Option)`
  height: 40px;
  width: 85%;
  padding-left: 3px;
`;

const SubmitBtn = styled(SubmitButton)`
  margin-top: 8%;
  width: 85%;
  margin-bottom: 5%;
  height: 35px;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  height: 35px;
`;

const OrgSignup = styled.div`
  margin-top: 15%;
  color: blueviolet;
  &:hover {
    color: ${({ theme }) => theme.colors.color_text_light} !important;
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

const Head = styled.h1`
  margin-top: 5%;
  margin-bottom: 15%;
  font-family: "Spartan";
  font-style: normal;

  text-align: center;

  color: #1a1a1a;
`;

const PageBorder = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 750px;
  background: #f8f7f5;
  border-radius: 10px;
`;

const InputBox = styled(Input)`
  width: 85%;
  height: 35px;
  margin-bottom: 6%;
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
