import React from "react";
import {Helmet} from "react-helmet";
import {Header} from "../Header/Header";

export const Layout = ({children, title}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pegasus | {title}</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
};
