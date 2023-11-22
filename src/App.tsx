import React from "react";
import { Layout } from "antd";
import Header from "./components/organisms/Header";
import Content from "./components/organisms/Content";
import Footer from "./components/organisms/Footer";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default App;
