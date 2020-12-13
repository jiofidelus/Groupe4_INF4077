import CIcon from "@coreui/icons-react";
import { CCol, CRow, CWidgetProgressIcon } from "@coreui/react";
import React from "react";

export default function WidgetPatient() {
  return (
    <>
      <CRow>
        <CCol sm="6" md="2">
          <CWidgetProgressIcon
            header="87.500"
            text="Cas declares"
            color="gradient-info"
          >
            <CIcon name="cil-people" height="36" />
          </CWidgetProgressIcon>
        </CCol>
        <CCol sm="6" md="2">
          <CWidgetProgressIcon
            header="385"
            text="Cas confirmes"
            color="gradient-success"
          >
            <CIcon name="cil-userFollow" height="36" />
          </CWidgetProgressIcon>
        </CCol>
        <CCol sm="6" md="2">
          <CWidgetProgressIcon
            header="1238"
            text="Niveau d'alerte"
            color="gradient-warning"
          >
            <CIcon name="cil-basket" height="36" />
          </CWidgetProgressIcon>
        </CCol>
      </CRow>
    </>
  );
}
