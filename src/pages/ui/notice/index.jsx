import React from "react";
import { Card, Button, notification } from "antd";
import "../ui.less";

export default class Notice extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      });
    }
    notification[type]({
      message: "通知",
      description: "something to do..."
    });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="通知提醒框" className="cardWrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success")}
          >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info")}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning")}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification("error")}>
            Error
          </Button>
        </Card>
        <Card title="通知提醒框" className="cardWrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topLeft")}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "topRight")}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning", "bottomLeft")}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("error", "bottomRight")}
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}
