import React from 'react';
import { Layout } from 'antd';
import './App.css';
import SideMenu from './components/sideMenu/SideMenu';
import { ReactDOM } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import InitialPage from './pages/InitialPage';
import Posts from './pages/Posts';
import Users from './pages/Users';
import ApprRoutes from './App.routes';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className='SideMenu'>
          <SideMenu />

          <Content>
            <ApprRoutes />
          </Content>

        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
