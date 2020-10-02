import React from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../store/auth";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function SignupPage() {
  const [form] = Form.useForm();
  const currentUserId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { username, password } = values;

    dispatch(login(username, password));
  };

  if (currentUserId) return <Redirect to="/" />;

  return (
    <Form {...layout} form={form} name="basic" onFinish={onFinish}>
        <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Enter your Email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: "Enter your OPChamps Username",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Password",
          },
        ]}
      >
        <Input.Password />
        </Form.Item>
        <Form.Item
        name="confirmPassword"
        label="Confirm"
        rules={[
          {
            required: true,
            message: "Confirm Password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignupPage;
