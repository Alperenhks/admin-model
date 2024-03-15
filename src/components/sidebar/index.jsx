import React from "react";
import { Card, Layout, Menu } from "antd";
import logo from "../../assets/react.svg";
import { useTranslation } from 'react-i18next';
import {
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  LogoutOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
// import RenderIconComponent from "../Icon";
// import useTheme from "../../hooks/useTheme";
// import styles from "./style"

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

const Sidebar = ({ collapsed, onContentChange }) => {
    const [t, i18n] = useTranslation();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      collapsedWidth={80}
    >
        <Card>
            <Meta 
                title={collapsed ? ""  : "React Theme"}
                avatar={<img src={logo} alt="logo"/>}
            />
        </Card>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined/>} onClick={null}>
         {t('HomePage')}
        </Menu.Item>
        <SubMenu key="sub1" icon={<BookOutlined/>} title="Kurs İşlemleri">
          <Menu.Item key="5" icon={<SearchOutlined/>} onClick={null}>
            Kurs Ara
          </Menu.Item>
          <Menu.Item key="6" icon={<PlusOutlined/>} onClick={null}>
            Kurs Ekle
          </Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <Menu.Item key="3" icon={<UserOutlined/>}  onClick={null}>
          Hesabım
        </Menu.Item>
        <Menu.Item key="4" icon={<LogoutOutlined />} onClick={null}>
          Çıkış Yap
        </Menu.Item>
      </Menu>
    </Sider>
  );
}; 

export default Sidebar;