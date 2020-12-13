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
import React, { useRef } from "react";

const PatientCreate = () => {
  const photoElt = useRef();

  return (
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
                                <img src="images/regis.png" alt="Avatar" />
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
                                />
                                <FontAwesomeIcon
                                  cursor="pointer"
                                  color="red"
                                  icon={faTimesCircle}
                                  size="lg"
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
                      placeholder="Noms"
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
                        value={1}
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
                        value={2}
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
                    <CSelect>
                      <option value="CENTRE">YAOUNDE</option>
                      <option value="EST">BERTOUA</option>
                      <option value="LITTORAL">DOUALA</option>
                      <option value="SUD">EBOLOWA</option>
                      <option value="NORD">MAROUA</option>
                      <option value="EXTRENE NORD">GAROUA</option>
                      <option value="ADAMAOUA">NGAOUNDERE</option>
                      <option value="SUD-OUEST">BUEA</option>
                      <option value="OUEST">BAFOUSSAM</option>
                      <option value="NORD-OUEST">BAMENDA</option>
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
                    />
                  </CCol>
                  <CCol sm="3">
                    <CLabel className="font-weight-bold" htmlFor="adminission">
                      Date d'admission
                    </CLabel>
                    <CInput
                      type="date"
                      id="adminission"
                      placeholder="adminission"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="4">
                    <input
                      type="file"
                      size="md"
                      hidden
                      id="photo"
                      placeholder="photo"
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter className="d-flex justify-content-between">
            <CButton size="md" color="danger">
              <FontAwesomeIcon icon={faTrash} /> Vider les champs
            </CButton>

            <CButton type="submit" color="success">
              Enregistrer <FontAwesomeIcon icon={faSave} size="md" />
            </CButton>
          </CCardFooter>
        </CForm>
      </>
    </CCard>
  );
};

export default PatientCreate;
