import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/sidebar';
import HeaderComponent from '../../components/navbar';
// import ContentComponent from '../../components/contents';
// import useAuthentication from '../../hooks/useAuthentication.jsx'
// import "../../assets/css/admin/Admin.css";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
//   const [selectedContent, setSelectedContent] = useState("anasayfa");
//   const loginData = useAuthentication();

//   if (!loginData) return null;

  const toggleCollapsed = () => setCollapsed(!collapsed);
//   const handleContentChange = content => setSelectedContent(content);

  const layoutStyle = { minHeight: '100vh' };
  const contentLayoutStyle = { 
    transition: 'margin-left 0.2s', 
    background: '#fff'  
  };

  return (
    <Layout  style={layoutStyle}>
        <HeaderComponent collapsed={collapsed} toggle={toggleCollapsed} />
      <Layout theme="light" className="site-layout" style={contentLayoutStyle}>
      <Sidebar collapsed={collapsed} onContentChange={null} />

        {/* <HeaderComponent collapsed={collapsed} toggle={toggleCollapsed} /> */}
        {/* <ContentComponent selectedContent={selectedContent} /> */}
      </Layout>
    </Layout>
  );
};

export default Home;