import React from "react";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";
import SidebarLayout from "../../components/SidebarLayout";

function Dashboard() {

  return (
    <>
      <Topbar />
      <SidebarLayout>
        <Outlet />
      </SidebarLayout>
    </>
  );
}

export default Dashboard;
