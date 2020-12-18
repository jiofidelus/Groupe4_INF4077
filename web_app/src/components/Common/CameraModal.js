import {
  CButton,
  CCol,
  CFormGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from "@coreui/react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraModal = ({ modal, toggle, newPhoto, ...props }) => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    newPhoto(imageSrc);
  }, [webcamRef]);

  return (
    <CModal size="lg" show={modal} onClose={toggle} color="info">
      <CModalHeader closeButton>Prendre Photo</CModalHeader>
      <CModalBody>
        <CRow
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="p-1"
        >
          <CFormGroup row>
            <CCol sm="12">
              {modal && (
                <Webcam
                  audio={false}
                  height={350}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={350}
                  videoConstraints={videoConstraints}
                />
              )}
            </CCol>
          </CFormGroup>
        </CRow>
      </CModalBody>
      <CModalFooter style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <CButton onClick={capture} color="info">
            <FontAwesomeIcon icon={faCamera} size="md" /> Prendre photo
          </CButton>
        </div>
        <div>
          <CButton color="secondary" onClick={toggle}>
            Fermer
          </CButton>
        </div>
      </CModalFooter>
    </CModal>
  );
};

export default CameraModal;
