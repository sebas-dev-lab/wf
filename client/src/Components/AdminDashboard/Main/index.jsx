import React from "react";
import Applicants from "./Applicants";
import Dashboard from "./Dashboard";
import Recruiters from "./Recruiters";
import Reports from "./Reports";
import { Route } from "react-router-dom";

const MainAdmin = () => {
  return (
    <div>
      <Route exact path="/admin/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/admin/applicants">
        <Applicants />
      </Route>
      <Route exact path="/admin/recruiters">
        <Recruiters />
      </Route>
      <Route exact path="/admin/reports">
        <Reports />
      </Route>
    </div>
  );
};

export default MainAdmin;
