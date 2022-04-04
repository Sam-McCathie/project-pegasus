import React from "react";
// import {Helmet} from "react-helmet";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Header} from "../Header/Header";
import "./Layout.scss";

export const Layout = ({children, title}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pegasus | {title}</title>
      </Helmet>
      <Header />
      {children}
    </HelmetProvider>
  );
};
