import {
  CBadge,
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
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPatients } from "../../actions/patientActions";
import { BUCKET_URL } from "../../config";
import { fieldCas, getBadge } from "../../utils/DataTable";
import WidgetPatient from "../widgets/WidgetPatient";

const Dashboard = (props) => {
  const { patients, fetchPatients, loading } = props;

  useEffect(() => {
    if (patients.length === 0) {
      fetchPatients();
    }
  }, [patients, fetchPatients]);

  return (
    <>
      <WidgetPatient />
      <CRow>
        <CCol>
          {loading ? (
            <div className="spinner-border spinner-boder-xl" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <CCard>
              <CCardHeader>
                <h3>Listes des Cas</h3>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  pagination
                  items={patients.data}
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
                            src={
                              item.picture
                                ? `${BUCKET_URL}/patients/${item.patientIdArchive}/${item.picture}`
                                : `${BUCKET_URL}/default/user.png`
                            }
                            className="c-avatar-img"
                            alt="admin@bootstrapmaster.com"
                          />
                        </div>
                      </td>
                    ),
                    ville: (item) => <td>{item.region.libelleRegion}</td>,

                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status.idStatus)}>
                          {item.status.libelleStatut}
                        </CBadge>
                      </td>
                    ),
                    actions: (item, index) => {
                      return (
                        <td className="py-2">
                          <div className="d-flex justify-content-between">
                            <CLink key={index} target="_blank">
                              <CButton
                                to={`/patients/${item.idPatient}`}
                                color="info"
                                size="sm"
                              >
                                <FontAwesomeIcon
                                  className="mr-1"
                                  icon={faEye}
                                />
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
          )}
        </CCol>
      </CRow>
    </>
  );
};

const mapStateToProps = ({ patientState }) => ({
  loading: patientState.loading,
  patients: patientState.patients,
});

export default connect(mapStateToProps, { fetchPatients })(Dashboard);
