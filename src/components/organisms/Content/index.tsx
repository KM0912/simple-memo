import React, { useState } from "react";
import styled from "styled-components";
import { Button, Layout, Space, theme } from "antd";
import TextArea from "antd/es/input/TextArea";

const { Content: AntContent } = Layout;

const SDiv = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.colorBgContainer};
`;

const SSpace = styled(Space)`
  width: 100%;
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

  const handleDelete = () => {
    setValue("");
    localStorage.removeItem("notes");
  };

  return (
    <AntContent className="site-layout">
      <SDiv theme={{ colorBgContainer }}>
        <SSpace direction="vertical" size="small">
          <TextArea
            value={value}
            onChange={handleChange}
            placeholder="Enter your notes here..."
            autoSize={{ minRows: 25, maxRows: 25 }}
          />
          <Button danger onClick={handleDelete}>
            Delete Notes
          </Button>
        </SSpace>
      </SDiv>
    </AntContent>
  );
};

export default Content;
