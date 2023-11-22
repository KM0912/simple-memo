import React, { useState } from "react";
import styled from "styled-components";
import { Layout, theme } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Content: AntContent } = Layout;

const SDiv = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.colorBgContainer};
`;

const Content: React.FC = () => {
  const [value, setValue] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntContent className="site-layout">
      <SDiv style={{ padding: 24, background: colorBgContainer }}>
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your notes here..."
          autoSize={{ minRows: 25, maxRows: 25 }}
        />
      </SDiv>
    </AntContent>
  );
};

export default Content;
