import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, InputNumber } from "antd";

export default function Update() {
  const { id } = useParams();
  const [contact, setState] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4200/${id}`)
      .then(async (res) => {
        await setState(res.data);
      });
  }, []);
  console.log(contact);
  const onFinish = (values) => {
    console.log(values)
    axios
      .post(`http://localhost:4200/update/${id}`, values)
      .then((res) => console.log(res.data, "asd"))
      .catch((err) => "Error: " + err);
    window.location = "/";
  };
  if (!contact) {
    return <div>Loading!!</div>;
  } else
    return (
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Form.Item
            label="First Name"
            name={"first_name"}
            rules={[{ required: true }]}
            initialValue={contact.first_name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Middle Name"
            name={"middle_name"}
            initialValue={contact.middle_name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={"last_name"}
            rules={[{ required: true }]}
            initialValue={contact.last_name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Number"
            name={"mobile"}
            rules={[{ required: true, type: "number" }]}
            initialValue={contact.mobile}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ type: "email", required: "true" }]}
            initialValue={contact.email}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name={"address"}
            rules={[{ required: true }]}
            initialValue={contact.address}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}
