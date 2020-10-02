import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.less';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { delete_cookie } from 'sfcookies';
import { RadarChartOutlined, CrownOutlined, ApartmentOutlined } from '@ant-design/icons';
import logo from './logo.png'
import LogCard from "./pages/LogCard";
import Champions from "./components/Champions";
import Top from "./components/Top";
import Jg from "./components/Jg";
import Mid from "./components/Mid";
import Adc from "./components/Adc";
import Region from "./components/Region"
import Sup from "./components/Sup";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Champion from "./components/Champion";


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function App() {
  const currentUserId = useSelector((state) => state.auth.id)
  const cookie_key = 'token';
  const logout = () => {
    window.location.reload(false);
    delete_cookie(cookie_key);
  }
  const cities = [
    "Bandle City",
    "Bilgewater",
    "Demacia",
    "Ionia",
    "Ixtal",
    "Noxus",
    "Piltover",
    "Shadow Isles",
    "Shurima",
    "Targon",
    "The Freljord",
    "The Void",
    "Zaun"
  ]

  return (
  <BrowserRouter>
    <Layout >
    <Header className="header">
      <img className="logo" src={logo} alt='logo' />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  >
          <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/champs">Champions</Link></Menu.Item>
          <Menu.Item key="3">Items</Menu.Item>
          {!currentUserId && <Menu.Item key="4" style={{float: 'right'}}><Link to="/login">Log In</Link></Menu.Item>}
          {currentUserId && <Menu.Item key="4" style={{float: 'right'}}><NavLink to="/home" onClick={logout}>Log Out</NavLink></Menu.Item>}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>

      </Breadcrumb>
      <Layout className="site-layout-background" >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            theme="dark"
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<CrownOutlined />} title="Champs By Role">
            <Menu.Item key="1"><Link to="/champs">All</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/top">Top</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/jg">Jungle</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/mid">Mid</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/adc">Adc</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/sup">Support</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<RadarChartOutlined />} title="Regions">
              {cities.map((e, idx) => <Menu.Item key={`${idx + 7}`}><Link to={`/regions/${idx + 1}`}>{e}</Link></Menu.Item>)}
            </SubMenu>
            <SubMenu key="sub3" icon={<ApartmentOutlined />} title="More">
              <Menu.Item key="20">About Us</Menu.Item>
              <Menu.Item key="21">Whats Next?</Menu.Item>
              <Menu.Item key="22">AppAcademy</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Switch>
              <Route path="/home"><div><Home /></div></Route>
              <Route path="/login"><div className="log-card" style={{ textAlign: "center" }}><LogCard /></div></Route>
              <Route path="/champions/:id" component={Champion}></Route>
              <Route path="/champs"><div><Champions /></div></Route>
              <Route path="/regions/:id"><div><Region /></div></Route>
              <Route path="/top"><div><Top /></div></Route>
              <Route path="/jg"><div><Jg /></div></Route>
              <Route path="/mid"><div><Mid /></div></Route>
              <Route path="/adc"><div><Adc /></div></Route>
              <Route path="/sup"><div><Sup /></div></Route>
              <Route path="/"><div><Home /></div></Route>
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
