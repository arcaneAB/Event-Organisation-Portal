import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Listings</span>}>
      <MenuItemGroup title="Event 1">
        <Menu.Item key="setting:1">Team 1</Menu.Item>
        <Menu.Item key="setting:2">Venue 1</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Event 2">
        <Menu.Item key="setting:3">Team 2</Menu.Item>
        <Menu.Item key="setting:4">Venue 2</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu