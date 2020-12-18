import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import {
  faArchive,
  faArrowLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPatient } from "../../actions/patientActions";
import { BUCKET_URL } from "../../config";
import { fieldSuivie, getBadge } from "../../utils/DataTable";
import Dot from "../Common/Dot";
import MessageModal from "../Common/MessageModal";

const PatientDetails = (props) => {
  const idPatient = props.match.params.id;
  const [modal, setModal] = useState(false);

  const { fetchPatient, patient, history } = props;

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetchPatient(idPatient);
  }, [idPatient, fetchPatient]);

  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  return patient === null ? (
    <div className="spinner-border spinner-border-xl" role="stastus">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
    <>
      <MessageModal playSound={playSound} modal={modal} toggle={toggle} />
      <CRow>
        <CCol col="2" sm="6" md="2" className="mb-3">
          <CButton
            onClick={() => history.goBack()}
            block
            size="sm"
            color="dark"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Retour
          </CButton>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="mr-3">{patient.names}</span>
                </div>
                <CButton onClick={toggle} color="info">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faArchive}
                    color="white"
                  />
                  Envoyer message
                </CButton>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-end">
                <CButton size="sm" color="dark" style={{ color: "white" }}>
                  <FontAwesomeIcon className="mr-2" icon={faEdit} />
                  Modifier les informations
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CRow className="p-5">
                <CCol className="text-center" sm="6">
                  <div className="d-flex justify-content-center h-100">
                    <div className="image_outer_container">
                      <div className="green_icon"></div>
                      <div className="image_inner_container">
                        <img
                          src={
                            patient.picture
                              ? `${BUCKET_URL}/patients/${patient.patientIdArchive}/${patient.picture}`
                              : `${BUCKET_URL}/default/user.png`
                          }
                          alt="photo de profil"
                        />
                      </div>
                      <div className="p-3">
                        <CButton color={getBadge(patient.status.idStatus)}>
                          {patient.status.libelleStatut}
                        </CButton>
                      </div>
                    </div>
                  </div>
                </CCol>
                <CCol sm="6">
                  <div className="">
                    <h6>
                      <strong>Noms: </strong>
                      {patient.names}
                    </h6>
                    <hr />
                    <h6>
                      <strong>Prénoms:</strong>
                      {patient.surnames}
                    </h6>
                    <hr />
                    <h6>
                      <strong> Sexe:</strong>
                      {patient.sexe}
                    </h6>
                    <hr />
                    <h6>
                      <strong> Age: </strong> {patient.old}
                    </h6>
                    <hr />
                    <h6>
                      <strong> Poids: </strong> {patient.poids} Kg
                    </h6>
                    <hr />
                    <h6>
                      <strong> Ville: </strong> {patient.region.libelleRegion}
                    </h6>
                    <hr />
                    <h6>
                      <strong>Date d'admission:</strong> {patient.admissionDate}
                    </h6>
                    <hr />
                    <h6>
                      <strong>Telephones:</strong> {patient.phones}
                    </h6>
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CTabs activeTab="home">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="home">Suivie Medical</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="home">
                  <CDataTable
                    items={patient.suivies}
                    fields={fieldSuivie}
                    scopedSlots={{
                      Numero: (_, index) => <td>{++index}</td>,

                      dehydrationLevel: (item, index) => (
                        <td>
                          <Dot level={3} />
                        </td>
                      ),
                      selleLevel: (item, index) => (
                        <td>
                          <Dot level={2} />
                        </td>
                      ),
                      vomitingLevel: (item, index) => (
                        <td>
                          <Dot level={5} />
                        </td>
                      ),
                      diahreeLevel: (item, index) => (
                        <td>
                          <Dot level={1} />
                        </td>
                      ),
                    }}
                  ></CDataTable>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

const mapStateToProps = ({ patientState }) => ({
  patient: patientState.patient,
});

export default connect(mapStateToProps, { fetchPatient })(PatientDetails);
