import React from "react";
import { Card, Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default class Loadings extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: "0 10px" }} />
          <Spin size="large" />
          <Spin
            indicator={<LoadingOutlined />}
            style={{ marginLeft: 10 }}
            spinning={true}
          />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="Some contents..."
            type="info"
            style={{ marginBottom: 10 }}
          />
          <Spin>
            <Alert
              message="React"
              description="Some contents..."
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="Some contents..."
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin indicator={<LoadingOutlined />}>
            <Alert
              message="React"
              description="Some contents..."
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
