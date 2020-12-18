import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import {
  faCamera,
  faMap,
  faSave,
  faTimesCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { createPatient } from "../../actions/patientActions";
import CameraModal from "../Common/CameraModal";

const PatientCreate = (props) => {
  const [modal, setModal] = useState(false);
  const [patient, setPatient] = useState({
    names: "",
    surnames: "",
    old: 0,
    poids: 0,
    sexe: "",
    phones: "",
    admissionDate: null,
    regionIdRegion: 1,
    statusIdStatus: 1,
    file: null,
  });

  const toggle = () => {
    setModal(!modal);
  };

  const newPhoto = (photo) => {
    setPatient({ ...patient, file: photo });
    toggle();
  };

  const onSave = (event) => {
    event.preventDefault();
    props
      .createPatient(patient)
      .then((_) => {
        toast.success("Nouveau patient ajoutee");
      })
      .catch((_) => {
        toast.error("Erreur: Veuillez les champs");
      });
    clearInput();
  };

  const clearInput = () => {
    setPatient({
      names: "",
      surnames: "",
      old: 0,
      poids: 0,
      sexe: "",
      phones: "",
      admissionDate: null,
      regionIdRegion: 1,
      statusIdStatus: 1,
      file: null,
    });
  };

  return (
    <>
      <CameraModal newPhoto={newPhoto} modal={modal} toggle={toggle} />
      <CCard>
        <>
          <CForm>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Ajouter un cas </h4>
              <CButton color="info">
                <FontAwesomeIcon className="mr-2" icon={faMap} color="white" />
                Recuperer les coordonness
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CFormGroup row>
                    <div className="col-xs-12 col-md-12 mb-5">
                      <div className="d-flex justify-content-center h-100">
                        <div className="row">
                          <div className="col-xs-12 col-md-12 mb-5">
                            <div className="d-flex justify-content-center h-100">
                              <div className="image_outer_conWtainer">
                                <div className="green_icon"></div>
                                <div className="image_inner_container">
                                  <img
                                    src={
                                      patient.file
                                        ? patient.file
                                        : "images/user.png"
                                    }
                                    alt="Avatar"
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                  className="icon-camera"
                                >
                                  <FontAwesomeIcon
                                    cursor="pointer"
                                    icon={faCamera}
                                    size="lg"
                                    color="blue"
                                    onClick={toggle}
                                  />
                                  <FontAwesomeIcon
                                    cursor="pointer"
                                    color="red"
                                    icon={faTimesCircle}
                                    size="lg"
                                    onClick={() =>
                                      setPatient({ ...patient, file: null })
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="noms">
                        Noms:
                      </CLabel>
                      <CInput
                        type="text"
                        size="md"
                        id="noms"
                        value={patient.names}
                        placeholder="Noms"
                        onChange={(value) =>
                          setPatient({ ...patient, names: value.target.value })
                        }
                      />
                    </CCol>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="prenoms">
                        Prenoms:
                      </CLabel>
                      <CInput
                        size="md"
                        type="text"
                        id="prenoms"
                        placeholder="Prenoms"
                        value={patient.surnames}
                        onChange={(value) =>
                          setPatient({
                            ...patient,
                            surnames: value.target.value,
                          })
                        }
                      />
                    </CCol>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="age">
                        Age:
                      </CLabel>
                      <CInput
                        min="0"
                        max="100"
                        type="number"
                        id="age"
                        placeholder="age"
                        value={patient.old}
                        onChange={(value) =>
                          setPatient({
                            ...patient,
                            old: value.target.value,
                          })
                        }
                      />
                    </CCol>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="poids">
                        Poids:
                      </CLabel>
                      <CInput
                        min="0"
                        max="500"
                        type="number"
                        id="poids"
                        placeholder="poids"
                        value={patient.poids}
                        onChange={(value) =>
                          setPatient({ ...patient, poids: value.target.value })
                        }
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="sexe">
                        Sexe:
                      </CLabel>
                      <br />
                      <CFormGroup variant="checkbox" inline>
                        <CInputRadio
                          className="form-check-input"
                          id="sexe"
                          name="sexe"
                          value="M"
                          onChange={(sexe) =>
                            setPatient({ ...patient, sexe: sexe.target.value })
                          }
                        />
                        <CLabel variant="checkbox" htmlFor="sexe">
                          Masculin
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="checkbox" inline>
                        <CInputRadio
                          className="form-check-input"
                          id="sexe"
                          name="sexe"
                          value="F"
                          onChange={(sexe) =>
                            setPatient({ ...patient, sexe: sexe.target.value })
                          }
                        />
                        <CLabel variant="checkbox" htmlFor="feminin">
                          Feminin
                        </CLabel>
                      </CFormGroup>
                    </CCol>

                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="Ville">
                        Ville:
                      </CLabel>
                      <CSelect
                        onChange={(region) =>
                          setPatient({
                            ...patient,
                            regionIdRegion: region.target.value,
                          })
                        }
                      >
                        <option value="1">YAOUNDE</option>
                        <option value="2">BERTOUA</option>
                        <option value="4">DOUALA</option>
                        <option value="3">EBOLOWA</option>
                        <option value="5">MAROUA</option>
                        <option value="6">GAROUA</option>
                        <option value="7">NGAOUNDERE</option>
                        <option value="8">BUEA</option>
                        <option value="9">BAFOUSSAM</option>
                        <option value="10">BAMENDA</option>
                      </CSelect>
                    </CCol>
                    <CCol sm="3">
                      <CLabel className="font-weight-bold" htmlFor="telephone">
                        Telephones:
                      </CLabel>
                      <CInput
                        id="telephone"
                        placeholder="telephones"
                        name="telephones"
                        value={patient.phones}
                        onChange={(phones) =>
                          setPatient({
                            ...patient,
                            phones: phones.target.value,
                          })
                        }
                      />
                    </CCol>
                    <CCol sm="3">
                      <CLabel
                        className="font-weight-bold"
                        htmlFor="adminission"
                      >
                        Date d'admission
                      </CLabel>
                      <CInput
                        type="date"
                        id="adminission"
                        placeholder="adminission"
                        value={patient.admissionDate}
                        onChange={(date) =>
                          setPatient({
                            ...patient,
                            admissionDate: date.target.value,
                          })
                        }
                      />
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-between">
              <CButton onClick={clearInput} size="md" color="danger">
                <FontAwesomeIcon icon={faTrash} /> Vider les champs
              </CButton>
              {props.loadingCreate ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <CButton onClick={onSave} type="submit" color="success">
                  Enregistrer <FontAwesomeIcon icon={faSave} size="md" />
                </CButton>
              )}
            </CCardFooter>
          </CForm>
        </>
      </CCard>
    </>
  );
};

const mapStateToProps = ({ patientState }) => ({
  loadingCreate: patientState.loadingCreate,
});

export default connect(mapStateToProps, { createPatient })(PatientCreate);
