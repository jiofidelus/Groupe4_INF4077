/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TheContent, TheFooter, TheHeader, TheSidebar } from "./index";
import defaultNav from "./_nav";
import navParametres from "./_navSettings";

const TheLayout = () => {
  const [navigation, setNavigation] = useState(defaultNav);
  let location = useLocation();
  const { pathname } = location;

  const setNavigationData = (path) => {
    const routeName = path.split("/")[1];
    routeName === "parametres"
      ? setNavigation(navParametres)
      : setNavigation(defaultNav);
  };

  useEffect(() => {
    setNavigationData(pathname);
  }, [pathname, setNavigationData]);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar navigation={navigation} />
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
