import React from "react";
import 'antd/dist/antd.less';
import { Form, Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie'
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
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const currentUserId = useSelector((state) => state.auth.id);
  

  const onFinish = (values) => {
    const { email, username, password, confirmPassword } = values;
    if (!email) {
      window.alert('Please use a valid email')
    } else if (password !== confirmPassword) {
      window.alert('Please make sure the passwords match!')
    } else {
    console.log(values);
    fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      }
    })
      .then((res) => res.json())
      .then(() => {dispatch(login(username, password));})
      .catch((err) => console.log("ERROR: ", err))
    
  }
  }

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
