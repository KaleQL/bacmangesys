import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import "./style/common.less";

export default class admin extends React.Component {
  render() {
    return (
      <div>
        <Row className="contain">
          <Col span="4" className="navLeft">
            <NavLeft></NavLeft>
          </Col>
          <Col span="20" className="main">
            <Header></Header>
            <Row className="con">{this.props.children}</Row>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    );
  }
}
