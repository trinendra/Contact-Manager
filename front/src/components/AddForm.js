import React from "react";
import axios from "axios";
import { Form, Input, Button, InputNumber } from "antd";
export default function AddForm() {
  const onFinish = (values) => {
    console.log(values)
    axios
      .post("http://localhost:4200/add", values)
      .then((res) => console.log(res.data, "asd"))
      .catch((err) => "Error: " + err);
    window.location = "/";
  };
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
        >
          <Input />
        </Form.Item>
        <Form.Item label="Middle Name" name={"middle_name"}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name={"last_name"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number"
          name={"mobile"}
          rules={[{ required: true, type: "number" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[{ type: "email", required: "true" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name={"address"}
          rules={[{ required: true }]}
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
