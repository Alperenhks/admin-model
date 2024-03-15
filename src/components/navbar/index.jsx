import React, { useEffect } from 'react';
import { Layout, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/actions/themeAction';
import { MoonOutlined, SunOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import useTheme from '../../hooks/useTheme';
// import RenderIconComponent from '../Icon';

const { Header } = Layout;

const HeaderComponent = ({ collapsed, toggle }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.theme) === 'dark';
//   const theme = useTheme();
  const ToggleIcon = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;


  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', }}>
      <div className='trigger' onClick={toggle}>
        {ToggleIcon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <SunOutlined 
          style={{ color: isDarkMode ? '#fadb14' : 'inherit' }} 
          />
          <Switch
            checked={isDarkMode}
            onChange={() => dispatch(toggleTheme())}
          />
          <MoonOutlined
           style={{ color: isDarkMode ? 'white' : 'black' }} 
           />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;