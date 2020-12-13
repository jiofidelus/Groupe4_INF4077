import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDataTable,
  CImg,
  CLink,
  CRow,
} from "@coreui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Patient from "../../data/patient";
import { fieldCas } from "../../utils/DataTable";
import WidgetPatient from "../widgets/WidgetPatient";

const Dashboard = () => {
  return (
    <>
      <WidgetPatient />
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h3>Listes des Cas</h3>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                pagination
                items={Patient}
                hover
                sorter
                tableFilter
                columnFilter
                clickableRows
                striped
                bordered
                fields={fieldCas}
                scopedSlots={{
                  Numero: (_, index) => <td>{++index}</td>,
                  photo: (item) => (
                    <td>
                      <div className="c-avatar">
                        <CImg
                          src={`images/${item.photo}`}
                          className="c-avatar-img"
                          alt="photo patient"
                        />
                      </div>
                    </td>
                  ),
                  actions: ({ path }, index) => {
                    return (
                      <td className="py-2">
                        <div className="d-flex justify-content-between">
                          <CLink key={index} target="_blank">
                            <CButton to="/patients/1" color="info" size="sm">
                              <FontAwesomeIcon className="mr-1" icon={faEye} />
                              Consulter les donnees
                            </CButton>
                          </CLink>
                        </div>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
            <CCardFooter></CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
