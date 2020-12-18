import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { CChartBar, CChartDoughnut } from "@coreui/react-chartjs";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStatOne } from "../../actions/patientActions";

const Statistiques = (props) => {
  const { statistiques, getStatOne, stats } = props;

  useEffect(() => {
    getStatOne();
  }, [getStatOne]);

  return (
    <CCardGroup columns className="cols-2">
      {console.log(stats, "THE STAT")}
      <CCard>
        <CCardHeader>Cas par regions</CCardHeader>
        <CCardBody>
          <CChartBar
            type="bar"
            datasets={[
              {
                label: "Nombre patients",
                backgroundColor: "#f87979",
                data: stats.data,
              },
            ]}
            labels={stats.labels}
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

const mapStateToProps = ({ patientState }) => ({
  statistiques: patientState.statistiques,
  stats: patientState.stats,
});

export default connect(mapStateToProps, { getStatOne })(Statistiques);
