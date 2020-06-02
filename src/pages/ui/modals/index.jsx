import React from "react";
import { Card, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "../ui.less";

export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  };
  handeModal = model => {
    this.setState({
      [model]: true
    });
  };
  handleOk = model => {
    this.setState({
      [model]: false
    });
  };
  handleCancel = type => {
    this.setState({
      [type]: false
    });
  };
  handeCommit = type => {
    Modal.confirm({
      title: "Do you want to do?",
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {},
      onCancel() {}
    });
  };
  render() {
    return (
      <div>
        <Card title="基础模态框" className="cardWrap">
          <Button type="primary" onClick={() => this.handeModal("showModal1")}>
            open
          </Button>
          <Button type="primary" onClick={() => this.handeModal("showModal2")}>
            自定义
          </Button>
          <Button type="primary" onClick={() => this.handeModal("showModal3")}>
            顶部20px
          </Button>
          <Button type="primary" onClick={() => this.handeModal("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框" className="cardWrap">
          <Button type="primary" onClick={() => this.handeCommit("comfirm")}>
            comfirm
          </Button>
          <Button type="primary" onClick={() => this.handeCommit("info")}>
            info
          </Button>
          <Button type="primary" onClick={() => this.handeCommit("success")}>
            success
          </Button>
          <Button type="primary" onClick={() => this.handeCommit("error")}>
            error
          </Button>
          <Button type="primary" onClick={() => this.handeCommit("waring")}>
            waring
          </Button>
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.showModal1}
          onOk={() => this.handleOk("showModal1")}
          onCancel={() => this.handleCancel("showModal1")}
        >
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal"
          okText="好的"
          cancelText="算了"
          visible={this.state.showModal2}
          onOk={() => this.handleOk("showModal2")}
          onCancel={() => this.handleCancel("showModal2")}
        >
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal"
          style={{ top: 20 }}
          visible={this.state.showModal3}
          onOk={() => this.handleOk("showModal3")}
          onCancel={() => this.handleCancel("showModal3")}
        >
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Basic Modal"
          wrapClassName="centerModal"
          visible={this.state.showModal4}
          onOk={() => this.handleOk("showModal4")}
          onCancel={() => this.handleCancel("showModal4")}
        >
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
