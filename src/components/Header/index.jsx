import React from "react";
import "./index.less";
import { Row, Col } from "antd";
import Util from "../../utils/utils";

export default class Header extends React.Component {
  state = {};
  componentDidMount() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
  }
  render() {
    return (
      <div className="navCon">
        <Row className="navTop">
          <Col span="24">
            欢迎，kaley
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="navBot">
          <Col span="3" className="navBotLeft">
            首页
          </Col>
          <Col span="21" className="navBotRight">
            <span>{this.state.sysTime}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
