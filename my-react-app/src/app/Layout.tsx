import Navbar from "@/widgets/Navbar/Navbar";
import React from "react";

import { Outlet } from "react-router";

export default function Layout(): React.JSX.Element {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
