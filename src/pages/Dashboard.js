import React from "react";
import {Link} from "react-router-dom";
import {Layout} from "../components/Layout/Layout";

export const Dashboard = () => {
  return (
    <Layout title={"Dashboard"}>
      <h1>Dashboard</h1>
      <Link to="/calendar">
        <button>Calendar</button>
      </Link>
    </Layout>
  );
};
