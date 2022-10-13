import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const MemberIcon = ({ member, size, info }) => {
  const IconRef = useRef(null);
  const [iconRefTop, setIconRefTop] = useState();
  const [iconRefLeft, setIconRefLeft] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (IconRef.current) {
      setIconRefTop(IconRef.current.getBoundingClientRect().bottom);
      setIconRefLeft(IconRef.current.getBoundingClientRect().left);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IconRef.current && IconRef.current.getBoundingClientRect().bottom]);
  React.useLayoutEffect(() => {
    function updatePosition() {
      setIconRefTop(IconRef.current.getBoundingClientRect().bottom);
      setIconRefLeft(IconRef.current.getBoundingClientRect().left);
    }
    window.addEventListener("resize", updatePosition);
    updatePosition();
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const shortName = member.user_name
    .replace(/[^A-Za-z0-9À-ÿ ]/gi, "") // taking care of accented characters as well
    .replace(/ +/gi, " ") // replace multiple spaces to one
    .split(/ /) // break the name into parts
    .reduce((acc, item) => acc + item[0], "") // assemble an abbreviation from the parts
    .concat(member.user_name.substr(1)) // what if the name consist only one part
    .concat(member.user_name) // what if the name is only one character
    .substr(0, 2) // get the first two characters an initials
    .toUpperCase(); // uppercase, but you can format it with CSS as well

  return member.user_profile_image === "" ? (
    <>
      <MemberAvatar
        auth_type={member.auth_type}
        size={size}
        key={`${member.user_name}i`}
        icon={member.user_name === undefined && <UserOutlined />}
        onClick={() => setOpen(!open)}
        ref={IconRef}
      >
        {shortName === "UN" && member.user_name[0] !== "U"
          ? member.user_name.slice(0, 1)
          : shortName}
      </MemberAvatar>
      {info && open && (
        <AdditionalInfo left={iconRefLeft} top={iconRefTop}>
          <AdditionalInfoWrapper>
            <InfoLeft>
              <MemberAvatar
                auth_type={member.auth_type}
                size={32}
                key={`${member.user_name}i`}
                icon={member.user_name === undefined && <UserOutlined />}
                onClick={() => setOpen(!open)}
              >
                {shortName === "UN" && member.user_name[0] !== "U"
                  ? member.user_name.slice(0, 1)
                  : shortName}
              </MemberAvatar>
            </InfoLeft>
            <InfoRight>
              <UserName>{member.user_name}</UserName>
              <UserEmail>{member.user_email}</UserEmail>
            </InfoRight>
          </AdditionalInfoWrapper>
        </AdditionalInfo>
      )}
    </>
  ) : (
    <>
      <MemberAvatar
        auth_type={member.auth_type}
        size={size}
        key={`${member.user_name}i`}
        src={member.user_profile_image}
        onClick={() => setOpen(!open)}
        ref={IconRef}
      ></MemberAvatar>
      {info && open && (
        <AdditionalInfo left={iconRefLeft} top={iconRefTop}>
          <AdditionalInfoWrapper>
            <InfoLeft>
              <MemberAvatar
                auth_type={member.auth_type}
                size={32}
                key={`${member.user_name}i`}
                src={member.user_profile_image}
                onClick={() => setOpen(!open)}
              ></MemberAvatar>
            </InfoLeft>
            <InfoRight>
              <UserName>{member.user_name}</UserName>
              <UserEmail>{member.user_email}</UserEmail>
            </InfoRight>
          </AdditionalInfoWrapper>
        </AdditionalInfo>
      )}
    </>
  );
};
// #22D291
//   #37DF94

const InfoLeft = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const InfoRight = styled.div`
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const UserEmail = styled.div`
  font-size: 12px;
`;

const AdditionalInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const AdditionalInfo = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  height: 60px;
  width: 280px;
  margin: 5px 0;
  z-index: 9999;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.01),
    0px 1px 1px 0px rgba(0, 0, 0, 0.014), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const MemberAvatar = styled(Avatar)`
  border: ${(props) =>
    ({
      admin: `2px solid ${props.theme.colors.color_base_white} !important`,
      manager: `2px solid ${props.theme.colors.color_primary_light} !important`,
      staff: `1px solid ${props.theme.colors.color_base_white} !important`,
      agent: `1px solid ${props.theme.colors.color_primary_regular} !important`,
    }[props.auth_type])};
  color: white;
  cursor: pointer;
  font-size: ${(props) => `${props.size * 0.6}px !important`};
  /* width: 32px;
  height: 32px;
  line-height: 32px; */

  img {
    border-radius: 50%;
  }
`;
