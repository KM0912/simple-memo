import { Layout, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Header: AntHeader } = Layout;

const SHeader = styled(AntHeader)`
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

const Header: React.FC = () => {
  return (
    <SHeader>
      <div>
        <STitle level={1}>Simple Memo</STitle>
      </div>
    </SHeader>
  );
};
export default Header;
