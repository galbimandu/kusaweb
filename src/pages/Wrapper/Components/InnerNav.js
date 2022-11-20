import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Menu, AvatarMember, Dropdown, Item } from "ui";
import { UserOutlined } from "@ant-design/icons";
const InnerNav = () => {
  const theme = useContext(ThemeContext);
  const history = useHistory();
  const user = { user_name: "Min Chang Kim", user_email: "mkim525@wisc.edu" };
  const menu = (
    <Menu>
      <MenuItem onClick={() => history.push("/settings/myaccount/")}>
        <UserInfoBox>
          <UserImg>
            <AvatarMember
              member={user}
              size={32}
              icon={<UserOutlined />}
            ></AvatarMember>
          </UserImg>
          <UserTextBox>
            <UserInfoText>{user.user_name}</UserInfoText>
            <UserInfoText>{user.user_email}</UserInfoText>
          </UserTextBox>
        </UserInfoBox>
      </MenuItem>
      <MenuItem onClick={() => history.push("/settings/myaccount/")}></MenuItem>
      <MenuItem onClick={() => history.push("/settings/email/")}></MenuItem>
      {user && user.auth === "admin" && (
        <>
          <MenuItem onClick={() => history.push("/settings/team")}></MenuItem>
          <MenuItem
            onClick={() => history.push("/settings/companyprofile")}
          ></MenuItem>
        </>
      )}
      <MenuItem
        onClick={() => {
          // logoutAxios().then(() => {
          //   dispatch(changeLoginState(false));
          //   window.localStorage.setItem("checked", "false");
          //   window.location.reload();
          // });
        }}
        style={{ color: theme.colors.color_state_danger_regular }}
      >
        Log Outㄴㄹㅇㄹㄴㅇㄴㄹㄹㄴㅇ
      </MenuItem>
    </Menu>
  );

  return (
    <InnerNavContainer>
      <LeftContainer>KUSA - UW MADISON</LeftContainer>
      <RightContainer>
        <AvatarDropdown
          overlay={menu}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div>
            <AvatarMember member={user} size={32} icon={<UserOutlined />} />
          </div>
        </AvatarDropdown>
      </RightContainer>
    </InnerNavContainer>
  );
};

export default InnerNav;

const AvatarDropdown = styled(Dropdown)``;

const InnerNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  /* background-color: ${({ theme }) => theme.colors.color_primary_darker}; */
  box-shadow: ${({ theme }) => theme.elevations.elevation_medium};
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div``;

const MenuItem = styled(Item)`
  user-select: none;
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

const UserTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoText = styled.div`
  :nth-child(2) {
    color: ${({ theme }) => theme.colors.color_text_light};
    font-size: ${({ theme }) => theme.fontSizes.txt_smallest};
  }
`;
