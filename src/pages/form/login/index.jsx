import React from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

export default class FormLogin extends React.Component {
  onFinish = values => {
    console.log("Success:", values);
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="登录">
          <Form
            {...layout}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                },
                {
                  min: 5,
                  max: 10,
                  message: "长度不在范围内"
                },
                {
                  pattern: new RegExp("^\\w+$", "g"),
                  message: "用户名必须为字母或者数字"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              {...tailLayout}
              name="remember"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please check your checkbox!"
                }
              ]}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
