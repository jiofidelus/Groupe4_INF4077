import { CCol, CRow } from "@coreui/react";
import React from "react";
import Profile from "./Profile";

const Settings = () => {
  return (
    <CRow>
      <CCol md="12">
        <Profile />
      </CCol>
    </CRow>
  );
};

export default Settings;
