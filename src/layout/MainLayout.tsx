import React, { useState } from 'react';
import { Layout, Menu, theme, Button } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路径设置选中的菜单项
  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path === '/') return ['/'];
    return [path];
  };

  const getOpenKeys = () => {
    const path = location.pathname;
    // 简单的逻辑：如果路径包含 /test/hooks，则展开 hooks 子菜单
    if (path.startsWith('/test/hooks')) return ['hooks'];
    return [];
  };

  return (
    <Layout className='h-screen w-full'>
      <Sider trigger={null} collapsible collapsed={collapsed} className='h-full'>
        <div className='h-16 flex items-center justify-center text-white text-xl font-bold overflow-hidden whitespace-nowrap'>
          {collapsed ? 'Admin' : 'React 19 Admin'}
        </div>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getOpenKeys()}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: '/',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: 'hooks',
              icon: <ExperimentOutlined />,
              label: 'Hooks Practice',
              children: [
                {
                  key: '/test/hooks/useState',
                  icon: <ThunderboltOutlined />,
                  label: 'useState',
                },
                {
                  key: '/test/hooks/useReducer',
                  icon: <ThunderboltOutlined />,
                  label: 'useReducer',
                },
                {
                  key: '/test/hooks/useActionState',
                  icon: <ThunderboltOutlined />,
                  label: 'useActionState',
                },
                {
                  key: '/test/hooks/useOptimistic',
                  icon: <ThunderboltOutlined />,
                  label: 'useOptimistic',
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className='flex items-center px-4'
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='ml-auto mr-4 text-gray-600'>User: Admin</div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
