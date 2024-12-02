import { Outlet } from "react-router-dom";
import TopBanner from "./TopBanner/TopBanner.tsx";
import React from "react";

const Layout: React.FC = () => {
  return (
    <div className="Layout">
      <div className="Layout__top">
        <TopBanner />
      </div>
        <div className="Layout__content">
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;