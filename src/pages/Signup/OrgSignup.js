import React, { useState } from "react";
import { Input, SubmitButton, SubmitButtonBlack, Select } from "ui";
import styled, { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";
import { useMajors } from "apicache";

const OrgSignup = () => {
  const [orgName, setOrgName] = useState("");
  const [InstaId, setInstaId] = useState("");
  const [majors, setMajors] = useState([]);
  const history = useHistory();
  const [filledAllReq, setFilledAllReq] = useState(true);

  const { data: majorList } = useMajors();

  const check = () => {
    return orgName != "" && majors != [] && InstaId != "";
  };

  const onSignup = () => {
    if (check()) {
      window.alert("success!");
      history.push("/home");
    } else {
      window.alert("please fill out the form");
      setFilledAllReq(false);
    }
  };

  const handleHaveAccount = () => {
    history.push("/login");
  };

  const handleMajorSelection = (value) => {
    let temp = [...majors];
    temp.push(value);
    setMajors(temp);
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
        <Head>Organization Signup</Head>
        <InputBox
          placeholder="동아리명"
          type="name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        ></InputBox>

        <SelectBox
          mode="multiple"
          placeholder="Select Majors Related to the Org"
          defaultValue={majors}
          onChange={handleMajorSelection}
          optionLabelProp="label"
        >
          {generateOptions()}
        </SelectBox>

        <InputBox
          placeholder="Insta ID"
          type="IId"
          value={InstaId}
          onChange={(e) => setInstaId(e.target.value)}
        ></InputBox>
        {!filledAllReq && <div>please fill out the form</div>}
        <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
        <SubmitBtnBlack onClick={handleHaveAccount}>
          Already Have an Account?
        </SubmitBtnBlack>
      </InputContainer>
    </PageBorder>
  );
};

export default OrgSignup;

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
  margin-top: 15%;
  width: 85%;
  margin-bottom: 5%;
  height: 35px;
`;

const SubmitBtnBlack = styled(SubmitButtonBlack)`
  width: 85%;
  margin-bottom: 10px;
  height: 35px;
`;

const Head = styled.h1`
  margin-bottom: 20%;
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
  height: 500px;
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
