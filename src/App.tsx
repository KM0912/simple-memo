import React from "react";
import styled from "styled-components";
import { Layout,  Typography, theme } from "antd";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const SHeader = styled(Header)`
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #2c3e50;
  `;

  const STitle = styled(Typography.Title)`
    color: #ecf0f1 !important;
  `;

  return (
    <Layout>
      <SHeader>
        <div>
          <STitle level={1}>
            Simple Memo
          </STitle>
        </div>
      </SHeader>
      <Content className="site-layout">
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
