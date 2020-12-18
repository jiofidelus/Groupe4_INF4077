import CIcon from "@coreui/icons-react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const TheHeaderDropdown = (props) => {
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src="images/user.png"
            className="c-avatar-img"
            alt="photo de profil"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>REGIS ATEMENGUE</strong>
        </CDropdownItem>
        <CDropdownItem to="parametres">
          <CIcon name="cil-bell" className="mfe-2" />
          Compte
        </CDropdownItem>
        <CDropdownItem onClick={() => props.logout()}>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Deconnexion
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logout })(TheHeaderDropdown);
