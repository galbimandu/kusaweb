import React, { useRef } from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const AvatarMember = ({ member, size, info }) => {
  const IconRef = useRef(null);
  const shortName = member.user_name
    .replace(/[^A-Za-z0-9À-ÿ ]/gi, "") // taking care of accented characters as well
    .replace(/ +/gi, " ") // replace multiple spaces to one
    .split(/ /) // break the name into parts
    .reduce((acc, item) => acc + item[0], "") // assemble an abbreviation from the parts
    .concat(member.user_name.substr(1)) // what if the name consist only one part
    .concat(member.user_name) // what if the name is only one character
    .substr(0, 2) // get the first two characters an initials
    .toUpperCase(); // uppercase, but you can format it with CSS as well

  return (
    <MemberAvatar
      size={size}
      key={`${member.user_name}i`}
      icon={member.user_name === undefined && <UserOutlined />}
      ref={IconRef}
    >
      {shortName === "UN" && member.user_name[0] !== "U"
        ? member.user_name.slice(0, 1)
        : shortName}
    </MemberAvatar>
  );
};
const MemberAvatar = styled(Avatar)`
  border: ${(props) =>
    `2px solid ${props.theme.colors.color_base_white} !important`};
  color: white;
  cursor: pointer;
  font-size: ${(props) => `${props.size * 0.6}px !important`};
  line-height: ${(props) => `${props.size * 0.875}px !important`};

  .ant-avatar-string {
    line-height: ${(props) => `${props.size * 0.875}px !important`};
  }
  img {
    border-radius: 50%;
  }
`;
