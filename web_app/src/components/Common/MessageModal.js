import {
  CButton,
  CCol,
  CForm,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
  CTextarea,
} from "@coreui/react";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { sendMessage } from "../../actions/patientActions";

const MessageModal = ({ modal, toggle, playSound, ...props }) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { sendMessage } = props;

  const onSubmitMessage = (event) => {
    event.preventDefault();
    setLoading(true);
    sendMessage({ phone, message })
      .then((_) => {
        setTimeout(() => {
          toast.success("Message envoye");
          toggle();
          setPhone("");
          setMessage("");
          setLoading(false);
          playSound("/sons/piece-of-cake-611.mp3");
        }, 3000);
      })
      .catch((_) => {
        toast.error("Erreur: Veuillez les champs");
      });
  };

  return (
    <CForm onSubmit={onSubmitMessage}>
      <CModal size="lg" show={modal} onClose={toggle} color="info">
        <CModalHeader closeButton>Envoyer le message</CModalHeader>
        <CModalBody>
          <CRow className="p-5">
            <CCol sm="12">
              <div className="">
                <CLabel className="font-weight-bold" htmlFor="telephones">
                  <strong>Telephones</strong>
                </CLabel>
                <CInput
                  required
                  type="text"
                  id="telephones"
                  placeholder="telephones"
                  value={phone}
                  onChange={(value) => setPhone(value.target.value)}
                />
              </div>
            </CCol>
            <CCol sm="12">
              <div className="">
                <CLabel className="font-weight-bold" htmlFor="messages">
                  <strong>Messages</strong>
                </CLabel>
                <CTextarea
                  value={message}
                  onChange={(value) => setMessage(value.target.value)}
                  required
                  id="messages"
                  placeholder="messages"
                />
              </div>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          {loading ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <CButton type="submit" color="info">
              <FontAwesomeIcon icon={faSms} size="md" /> Envoyer le message
            </CButton>
          )}

          <CButton color="secondary" onClick={toggle}>
            Fermer
          </CButton>
        </CModalFooter>
      </CModal>
    </CForm>
  );
};

const mapStateToProps = ({ patientState }) => ({
  message: patientState.message,
});

export default connect(mapStateToProps, { sendMessage })(MessageModal);
