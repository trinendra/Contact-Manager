import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Typography, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

export default function Contact(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="danger"
          size="small"
          onClick={() => props.deleteContact(props.currentContact._id)}
        >
          Delete
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="primary" size="small">
          <Link to={`/${props.currentContact._id}`}> Update</Link>
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row justify="space-between">
      <Col span={10} style={{ paddingBottom: "10px", paddingLeft: "10px" }}>
        <Title level={4} style={{ padding: "0px", margin: "0px" }}>
          {props.currentContact.first_name + " "}
          {props.currentContact.middle_name
            ? props.currentContact.middle_name + " "
            : ""}
          {props.currentContact.last_name}
        </Title>
        <Text type="secondary">{props.currentContact.address}</Text>
      </Col>
      <Col span={7}>
        <Title level={4} style={{ padding: "0px", margin: "0px" }}>
          {props.currentContact.mobile}
        </Title>
        <Text type="secondary">{props.currentContact.email}</Text>
      </Col>
      <Col xs={{ span: 0 }} lg={{ span: 7 }} sm={{ span: 7 }}>
        <Button
          type="danger"
          size="small"
          onClick={() => props.deleteContact(props.currentContact._id)}
        >
          Delete
        </Button>
        <Button type="primary" size="small">
          <Link to={`/${props.currentContact._id}`}> Update</Link>
        </Button>
      </Col>
      <Col xs={{ span: 2 }} sm={{ span: 0 }} style={{ float: "right" }}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            More
          </a>
        </Dropdown>
      </Col>
      <br />
    </Row>
  );
}
