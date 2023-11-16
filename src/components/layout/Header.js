import { useState, useEffect, useCallback, useContext } from "react";

import {
  Row,
  Col,
  Button,
  Input,
} from "antd";

import {
  SearchOutlined,
} from "@ant-design/icons";

import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { profile, toggler } from "../../assets/icon";



function Header({
  onPress
}) {

const  { setAuth } = useContext(AuthContext);
  useEffect(() => window.scrollTo(0, 0));

  const onSignIn = useCallback(()=>{
    setAuth(false)
  },[])

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Link to="/" className="btn-sign-in" onClick={onSignIn}>
            {profile}
            <span>Sign in</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
