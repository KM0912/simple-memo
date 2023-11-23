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
  const [value, setValue] = useState(localStorage.getItem("notes") || "");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  return (
    <AntContent className="site-layout">
      <SDiv theme={{ colorBgContainer }}>
        <TextArea
          value={value}
          onChange={handleChange}
          placeholder="Enter your notes here..."
          autoSize={{ minRows: 25, maxRows: 25 }}
        />
      </SDiv>
    </AntContent>
  );
};

export default Content;
