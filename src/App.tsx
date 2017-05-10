import * as React from 'react';
import './App.css';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Timer from './Timer';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const TimerEle = () => (
  <Timer />
);

class App extends React.Component<{}, null> {
  render() {
    return (
      <Router>
        <Layout style={{ height: '100vh' }}>
          <Sider style={{ overflow: 'auto' }}>
            <div className="logo">LOGO</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon type="user" />
                  <span className="nav-text">Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Icon type="video-camera" />
                  <span className="nav-text">About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/timer">
                  <Icon type="upload" />
                  <span className="nav-text">Timer</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/timer" component={TimerEle}/>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
