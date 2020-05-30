import React from "react";
import "./index.less";
import { Menu } from "antd";
import menunConfig from "../../resource/menunConfig";
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  handleClick = e => {
    console.log("click", e);
  };
  returnMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.returnMenu(item.children)}
          </SubMenu>
        );
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>后台系统</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ paddingTop: "20px" }}
          theme="dark"
          mode="vertical"
        >
          {this.returnMenu(menunConfig)}
        </Menu>
      </div>
    );
  }
}
