import { Layout, theme } from "antd";
import React from "react";

const { Content: AntContent } = Layout;

const Content: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntContent className="site-layout">
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        Content
      </div>
    </AntContent>
  );
};

export default Content;
