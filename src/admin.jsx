import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import Home from "./pages/Home";
import "./index.less";

export default class admin extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="4">
            <NavLeft></NavLeft>
          </Col>
          <Col span="20" className="rightCon">
            <Header></Header>
            <Row>
              <Home />
            </Row>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    );
  }
}
