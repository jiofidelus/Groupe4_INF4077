import React, { useState } from "react";
import { TheContent, TheFooter, TheHeader, TheSidebar } from "./index";

const TheLayout = () => {
  const [navigation, setNavigation] = useState([]);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
