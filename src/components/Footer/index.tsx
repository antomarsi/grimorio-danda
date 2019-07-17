import React from "react";
import { Layout } from "antd";

const Footer: React.SFC = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      Created by{" "}
      <a
        href="https://github.com/antomarsi"
        rel="noopener noreferrer"
        target="_blank"
      >
        Antônio Marco da Silva
      </a>
    </Layout.Footer>
  );
};

export default Footer;
