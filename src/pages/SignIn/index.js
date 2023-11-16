import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  Card,
} from "antd";
import { AuthContext } from "../../context/AuthContext";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function SignIn(){
    const { setAuth } = useContext(AuthContext);
    const onFinish = (values) => {
        setAuth(true);
      };
  
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      return (
        <>
          <Layout className="layout-default layout-signin">
            
            <Content className="signin">
              <Row gutter={[24, 0]} justify="space-around">
                <Col
                  // xs={{ span: 24, offset: 0 }}
                  // lg={{ span: 6, offset: 2 }}
                  // md={{ span: 10 }}
                >
                  <Title className="mb-15">Sign In</Title>
                  <Title className="font-regular text-muted" level={5}>
                    Enter your email and password to sign in
                  </Title>
                  <Card bordered={false} className="criclebox ">
                  <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="row-col"
                  >
                    <Form.Item
                      className="username"
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
  
                    <Form.Item
                      className="username"
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input placeholder="Password" />
                    </Form.Item>
  
                    <Form.Item
                      name="remember"
                      className="aligin-center"
                      valuePropName="checked"
                    >
                      <Switch defaultChecked onChange={onChange} />
                      Remember me
                    </Form.Item>
  
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                      >
                        SIGN IN
                      </Button>
                    </Form.Item>
                  </Form>
                  </Card>
                </Col>
                {/* <Col
                  className="sign-img"
                  style={{ padding: 12 }}
                  xs={{ span: 24 }}
                  lg={{ span: 12 }}
                  md={{ span: 12 }}
                >
                  <img src={signinbg} alt="" />
                </Col> */}
              </Row>
            </Content>
          </Layout>
        </>
      );
}

export default SignIn;
