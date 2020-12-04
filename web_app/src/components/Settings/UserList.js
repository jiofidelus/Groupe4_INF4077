import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { fieldsUtilisateur } from "../../utils/DataTable";

const UserList = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* <UtilisateurModal modal={modal} toggle={toggle} /> */}
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4> Listes des Utilisateurs: 10 </h4>
              <CButton color="info">
                <FontAwesomeIcon icon={faUserPlus} />
                Ajouter un utilisateur
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                itemsPerPage={10}
                fields={fieldsUtilisateur}
                pagination
                hover
                sorter
                tableFilter
                columnFilter
                clickableRows
                striped
                bordered
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserList;
