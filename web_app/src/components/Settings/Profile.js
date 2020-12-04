/** @format */

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import {
  faCamera,
  faSave,
  faTimesCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Profile = (props) => {
  const photoElt = useRef();
  const [validPassword, setValidPassword] = useState(true);

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h4>Informations du compte</h4>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <CFormGroup row>
              <div className="col-xs-12 col-md-12 mb-3">
                <div className="d-flex justify-content-center h-100">
                  <div className="row">
                    <div className="col-xs-12 col-md-12 mb-3">
                      <div className="d-flex justify-content-center h-100">
                        <div className="image_outer_container">
                          <div className="green_icon"></div>
                          <div className="image_inner_container">
                            <img src="images/user.png" alt="Avatar" />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
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
                              size="lg"
                              icon={faTimesCircle}
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
              <CCol className="offset-md-3" md="6">
                <CLabel className="font-weight-bold" htmlFor="noms">
                  Noms:
                </CLabel>
                <CInput
                  required
                  type="text"
                  size="md"
                  id="noms"
                  placeholder="Noms"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol className="offset-md-3" md="6">
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
            </CFormGroup>
            <CFormGroup row>
              <CCol className="offset-md-3" md="6">
                <CLabel className="font-weight-bold" htmlFor="email">
                  Email:
                </CLabel>
                <CInput type="text" id="email" disabled />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol className="offset-md-3" md="6">
                <CLabel className="font-weight-bold" htmlFor="motDePasse">
                  Nouveau mot de Passe:
                </CLabel>
                <CInput
                  type="text"
                  id="motDePasse"
                  placeholder="mot de Passe"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol className="offset-md-3" md="6">
                <CLabel
                  className="font-weight-bold"
                  htmlFor="motDePasseConfirmer"
                >
                  Confirmer le Nouveau Mot Passe:
                </CLabel>
                <CInput
                  type="text"
                  id="motDePasseConfirmer"
                  placeholder="Confirmer le mot de passe"
                />
                <div class="invalid-feedback">
                  Les mots de passe ne sont pas les meme
                </div>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol sm="4">
                <input
                  type="file"
                  size="md"
                  id="photo"
                  placeholder="photo"
                  ref={photoElt}
                  hidden
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
        <CButton color="success">
          Enregister <FontAwesomeIcon icon={faSave} size="md" />
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

export default Profile;
