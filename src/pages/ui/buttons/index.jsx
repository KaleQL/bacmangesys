import React from "react";
import { Card, Button } from "antd";
import "./index.less";

export default class Buttons extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="Button" className="cardWrap">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Card>
      </div>
    );
  }
}
