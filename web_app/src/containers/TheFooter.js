import { CFooter } from "@coreui/react";
import React from "react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Groupe 4
        </a>
        <span className="ml-1">&copy; 2020 .</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
