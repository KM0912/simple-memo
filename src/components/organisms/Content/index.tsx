import React from "react";
import styled from "styled-components";
import { Layout, theme } from "antd";
import Notes from "../../molecules/Notes";

const { Content: AntContent } = Layout;

const SDiv = styled.div`
  padding: 24px;
  background: ${(props) => props.theme.colorBgContainer};
`;

const Content: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntContent className="site-layout">
      <SDiv theme={{ colorBgContainer }}>
        <Notes />
      </SDiv>
    </AntContent>
  );
};

export default Content;
