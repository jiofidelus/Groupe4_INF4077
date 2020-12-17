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
import React from "react";
import SuivieData from "../../data/Suivie";
import { fieldSuivie } from "../../utils/DataTable";
import Dot from "../Common/Dot";

const PatientDetails = (props) => {
  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  return (
    // code for twilio api //

    //

    <>
      <CRow>
        <CCol col="2" sm="6" md="2" className="mb-3">
          <CButton block size="sm" color="dark">
            <FontAwesomeIcon icon={faArrowLeft} />
            Retour
          </CButton>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="mr-3">ATEMENGUE MOAFEMBE REGIS </span>
                </div>
                <CButton color="info">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faArchive}
                    color="white"
                  />
                  Envoyer message
                </CButton>

                <CButton
                  onClick={() => playSound("/sons/piece-of-cake-611.mp3")}
                  color="info"
                >
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faArchive}
                    color="white"
                  />
                  playSound
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
                        <img src={`images/regis.png`} alt="photo de profil" />
                      </div>
                      <div className="p-3">
                        <CButton>CAS SUSPECT</CButton>
                      </div>
                    </div>
                  </div>
                </CCol>
                <CCol sm="6">
                  <div className="">
                    <h6>
                      <strong>Noms: </strong>
                      ATEMENGUE MOAFEMBE
                    </h6>
                    <hr />
                    <h6>
                      <strong>Prénoms:</strong>
                      REGIS
                    </h6>
                    <hr />
                    <h6>
                      <strong> Sexe:</strong>Masculin
                    </h6>
                    <hr />
                    <h6>
                      <strong> Age: </strong> 19
                    </h6>
                    <hr />
                    <h6>
                      <strong> Poids: </strong> 56 Kg
                    </h6>
                    <hr />
                    <h6>
                      <strong> Ville: </strong> Yaounde
                    </h6>
                    <hr />
                    <h6>
                      <strong>Date d'admission:</strong> 22/12/2020
                    </h6>
                    <hr />
                    <h6>
                      <strong>Telephones:</strong> +237 694169369
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
                    items={SuivieData}
                    fields={fieldSuivie}
                    scopedSlots={{
                      Numero: (_, index) => <td>{++index}</td>,

                      deshydratation: (item, index) => (
                        <td>
                          <Dot level={3} />
                        </td>
                      ),
                      "Niveau de selles": (item, index) => (
                        <td>
                          <Dot level={2} />
                        </td>
                      ),
                      "Niveau de vomissements": (item, index) => (
                        <td>
                          <Dot level={5} />
                        </td>
                      ),
                      "Niveau de diarhree": (item, index) => (
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

export default PatientDetails;
