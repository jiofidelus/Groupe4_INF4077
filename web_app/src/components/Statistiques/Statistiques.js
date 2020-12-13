import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { CChartBar, CChartDoughnut } from "@coreui/react-chartjs";
import React from "react";

const Statistiques = () => {
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>Cas par regions</CCardHeader>
        <CCardBody>
          <CChartBar
            type="bar"
            datasets={[
              {
                label: "Nombre patients",
                backgroundColor: "#f87979",
                data: [40, 20, 50, 12, 45, 25, 45, 20, 52, 23],
              },
            ]}
            labels={[
              "CENTRE",
              "EST",
              "SUD",
              "SUD-OUEST",
              "NORD-OUEST",
              "NORD",
              "EXTRENE NORD",
              "ADAMAOUA",
              "LITTORAL",
              "OUEST",
            ]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Etats des Cas</CCardHeader>
        <CCardBody>
          <CChartDoughnut
            type="doughnut"
            datasets={[
              {
                backgroundColor: ["#41B883", "#00D8FF"],
                data: [70, 30],
              },
            ]}
            labels={["Cas suspects", "Cas confirmes"]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>
    </CCardGroup>
  );
};

export default Statistiques;
