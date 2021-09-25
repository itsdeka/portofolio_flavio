import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { Input, Space } from "antd";
import { Card } from "antd";
import { CloudFilled } from "@ant-design/icons";
import { Modal, Button } from "antd";
import { Divider } from "antd";
import { Calendar, Alert, Badge } from "antd";
import { Progress } from "antd";
import moment from "moment";
import {
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  PhoneOutlined,
  MailOutlined,
  ChromeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  DownloadOutlined
} from "@ant-design/icons";


const { SubMenu } = Menu;
const { TextArea } = Input;
const { Header, Content, Footer } = Layout;

const home = () => {
  const [navbar, setNavbar] = useState(false);


 

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  return (
    <Layout id="home">
      <Head>
        <title>Flavio Moceri's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header
          
          style={{ position: "fixed", zIndex: 3, width: "100%" }}
        >
          <Menu
          theme="light"
            className="menu"
            className={navbar ? "ant-layout-header" : "background-image"}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item
              style={{
                marginRight: "300px",
                marginLeft: "220px",
                fontSize: "30px",
                fontFamily: "horizon",
              }}
            >
              <a href="#home"><img src="logo_piccolo.png"/></a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="#home">About me</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#calendario">Projects</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#grafici">Contacts</a>
            </Menu.Item>
            <Menu.Item
            style={{
              marginLeft: "25%",
            }}>
              <a href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/" target="_blank">
            <Button icon={<LinkedinOutlined />} style={{'backgroundColor': "#02d783", 'borderColor': 'black', 'color': '#FDFFFF', 'borderRadius': '15px'}} >
          LinkedIn
        </Button>
        </a>
        </Menu.Item>
          </Menu>
        </Header>
        <main className="background-image">
          <Row>
            <Col className="main-title" span={12} offset={6}>
              <h1>
                
              </h1>
            </Col>
          </Row>
        </main>
        <Content>cazzo</Content>
      </body>
      <Footer className="footer">
       <h7>Coded with 💚 by <a className="text_footer" href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7/" target="_blank">@flaviomoceri</a></h7>
      </Footer>
    </Layout>
  );
};

export default home;
