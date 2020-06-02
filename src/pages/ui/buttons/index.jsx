import React from "react";
import { Card, Button, Radio } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  LeftOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import "../ui.less";

export default class Buttons extends React.Component {
  state = {
    loading: true
  };
  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };
  handleChange = e => {
    this.setState({
      size: e.target.value
    });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="基础按钮" className="cardWrap">
          <Button type="primary">Button</Button>
          <Button>Button</Button>
          <Button type="dashed">Button</Button>
          <Button type="danger">Button</Button>
          <Button disabled>Button</Button>
        </Card>
        <Card title="图形按钮" className="cardWrap">
          <Button icon={<PlusOutlined />}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
          <Button type="primary" icon={<SearchOutlined />}>
            搜索
          </Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            下载
          </Button>
        </Card>
        <Card title="loading按钮" className="cardWrap">
          <Button type="primary" loading={this.state.loading}>
            Loading
          </Button>
          <Button
            type="primary"
            shape="circle"
            loading={this.state.loading}
          ></Button>
          <Button loading={this.state.loading}>Loading</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button
            onClick={this.handleCloseLoading}
            icon={<PoweroffOutlined />}
          ></Button>
        </Card>
        <Card title="按钮组" className="cardWrap">
          <Button.Group>
            <Button
              type="primary"
              icon={<LeftOutlined />}
              style={{ marginRight: 0 }}
            >
              返回
            </Button>
            <Button type="primary" icon={<LeftOutlined />}>
              前进
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="cardWrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            btn
          </Button>
          <Button size={this.state.size}>btn</Button>
          <Button type="dashed" size={this.state.size}>
            btn
          </Button>
          <Button type="danger" size={this.state.size}>
            btn
          </Button>
        </Card>
      </div>
    );
  }
}
