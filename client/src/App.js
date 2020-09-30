import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DingtalkOutlined, CrownOutlined, SettingOutlined } from '@ant-design/icons';

import LogCard from "./pages/LogCard";
import Champion from "./components/Champions";


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function App() {

  return (
  <BrowserRouter>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/champs">Champions</Link></Menu.Item>
          <Menu.Item key="3">Items</Menu.Item>
          <Menu.Item key="4" style={{float: 'right'}}><Link to="/login">Log In</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>

      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<CrownOutlined />} title="Champs By Role">
              <Menu.Item key="1">Top</Menu.Item>
              <Menu.Item key="2">Jungle</Menu.Item>
              <Menu.Item key="3">Mid</Menu.Item>
              <Menu.Item key="4">ADC</Menu.Item>
              <Menu.Item key="5">Support</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DingtalkOutlined />} title="Items By Tier">
              <Menu.Item key="6">option5</Menu.Item>
              <Menu.Item key="7">option6</Menu.Item>
              <Menu.Item key="8">option7</Menu.Item>
              <Menu.Item key="9">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
              <Menu.Item key="10">option9</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Switch>
              <Route path="/login"><div className="log-card" style={{ textAlign: "center" }}><LogCard /></div></Route>
              <Route path="/champs"><div><Champion /></div></Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>OPChamps is a homage to OP.GG, create by Daniel Black using React.js</Footer>
  </Layout>
  </BrowserRouter>
  );
}

export default App;
