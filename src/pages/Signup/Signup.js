import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, SubmitButton, SubmitButtonBlack, Select } from "ui";
import { useHistory } from "react-router-dom";
import { useMajors } from "apicache";
import theme from "style/theme";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [wiscEmail, setWiscEmail] = useState("");
  const [userMajors, setUserMajors] = useState([]);
  const [userKakaoId, setUserKakaoId] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userStanding, setUserStanding] = useState("");
  const [filledAllReq, setFilledAllReq] = useState(true);
  const [isWiscEmail, setIsWiscEmail] = useState(true);
  const history = useHistory();
  const { data: majorList } = useMajors();
  console.log(majorList);

  const check = () => {
    if (!wiscEmail.includes("@wisc.edu")) {
      setIsWiscEmail(false);
      return false;
    }
    return (
      wiscEmail.includes("@wisc.edu") &&
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
          placeholder="Koraen Name"
          type="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="WISC Email"
          type="email"
          value={wiscEmail}
          onChange={(e) => setWiscEmail(e.target.value)}
        ></InputBox>
        {!isWiscEmail && <WarningText>Please Enter a Wisc Email</WarningText>}
        <InputBox
          placeholder="Phone Number (optional)"
          type="Phone"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="KakaoTalk ID (optional)"
          type="KakaoId"
          value={userKakaoId}
          onChange={(e) => setUserKakaoId(e.target.value)}
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
        <InputBox
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        ></InputBox>
        <InputBox
          placeholder="Confirm Password"
          type="password"
          value={userConfirmPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
        ></InputBox>
        {userConfirmPassword === userPassword && <></>}
        {!filledAllReq && <WarningText>please fill out the form</WarningText>}
        <OrgSignup onClick={handleOrgSignup}>
          Click here to register your Organization!
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

const WarningText = styled.div`
  color: ${({ theme }) => theme.colors.color_UW_red};
  width: 83%;
  margin: 4px;
`;

const SelectBox = styled(Select)`
  margin-top: 24px;
  width: 85%;
  .ant-select-selector {
    border-radius: 10px !important;
  }
`;

const Option = styled(Select.Option)`
  height: 40px;
  width: 85%;
  padding-left: 3px;
`;

const SubmitBtn = styled(SubmitButton)`
  margin-top: 8px;
  width: 85%;
  margin-bottom: 5%;
  height: 35px;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  height: 35px;
`;

const OrgSignup = styled.div`
  margin-top: 40px;
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

const Head = styled.div`
  margin-top: 41px;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  line-height: 50px;

  color: ${({ theme }) => theme.colors.color_text_black};
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
  background: #f8f7f5;
  margin-top: 36px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-radius: 10px;
`;

const InputBox = styled(Input)`
  width: 85%;
  height: 35px;
  margin-top: 24px;
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
