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
          className="background-image"
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
            <Button type="primary" >
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
                RACCONTA TE STESSO
                <br /> ESPRIMI LE TUE EMOZIONI
              </h1>
            </Col>
          </Row>
        </main>
      </body>
      <Footer>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <img src="/images/pesca.png"></img>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h6 style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
              Contatti
            </h6>
            <icon>
              <PhoneOutlined />
              <a
                style={{ color: "black !important" }}
                target="_blank"
                href="tel:3883289985"
              >
                ⠀+39 388 328 9985
              </a>
              <br />
              <MailOutlined />
              <a target="_blank" href="mailto:moceri.flavio@gmail.com">
                ⠀moceri.flavio@gmail.com
              </a>
              <br />
              <ChromeOutlined />
              <a target="_blank" href="https://flaviomoceri.it/">
                ⠀flaviomoceri.it
              </a>
            </icon>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h6 style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
              Meditation
            </h6>
            <p>
              Il sito web 'meditation', nasce dalla voglia di un ragazzino di
              poter conservare le proprie emozioni per sentirisi libero di
              creare e realizzare i propri sogni, divertendosi apprendendo ogni
              giorno. La programmazione spacca!!!
            </p>
            <Row justify="end">
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/flaviomoceri_/"
                  >
                    <InstagramOutlined />
                  </a>
                </icon>
              </Col>
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/flavio-moceri-6b2a141b7?originalSubdomain=it"
                  >
                    <LinkedinOutlined />
                  </a>
                </icon>
              </Col>
              <Col span={3}>
                <icon>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/flavio.moceri.9"
                  >
                    <FacebookOutlined />
                  </a>
                </icon>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        <p style={{ textAlign: "center" }}>
          Meditation ©2021 Created by Flavio Moceri
        </p>
      </Footer>
    </Layout>
  );
};

export default home;
