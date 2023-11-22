import React from "react";
import { Layout, theme } from "antd";
import Header from "./components/organisms/Header";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />
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
