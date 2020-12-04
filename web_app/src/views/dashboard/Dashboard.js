import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>LISTES DES CAS</CCardHeader>
            <CCardBody>
              <CDataTable />
            </CCardBody>
            <CCardFooter></CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
