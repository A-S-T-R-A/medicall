import claendly from "../../images/calendly.png";
import clinicalWorks from "../../images/clinicalWorks.png";
import athenaHealth from "../../images/athenaHealth.png";
import epics from "../../images/epic.png";
import hubspot from "../../images/hubspot.png";
import simplyBook from "../../images/simplyBook.png";
import freshWorks from "../../images/freshWorks.png";
import veradigm from "../../images/veradigm.png";
import patientFusion from "../../images/patientFusion.png";
import zoho from "../../images/zoho.png";
import Marquee from "react-fast-marquee";

export function TopMarquee() {
  return (
    <Marquee play={true} speed={100}>
      <img
        src={claendly}
        alt="Calendly icon"
        style={{ marginRight: "100px", width: "200px", height: "auto" }}
      />

      <img
        src={clinicalWorks}
        alt="Clinical Works icon"
        style={{ marginRight: "100px", width: "193px", height: "auto" }}
      />
      <img
        src={athenaHealth}
        alt="Athena Health icon"
        style={{ marginRight: "100px", width: "200px", height: "auto" }}
      />

      <img
        src={epics}
        alt="Epic icon"
        style={{ marginRight: "100px", width: "116px", height: "auto" }}
      />
      <img
        src={hubspot}
        alt="Hubspot icon"
        style={{ marginRight: "100px", width: "175px", height: "auto" }}
      />

      <img
        src={simplyBook}
        alt="Simply Book icon"
        style={{ marginRight: "100px", width: "200px", height: "auto" }}
      />
      <img
        src={freshWorks}
        alt="Fresh Works icon"
        style={{ marginRight: "100px", width: "188px", height: "auto" }}
      />

      <img
        src={veradigm}
        alt="Veradigm icon"
        style={{ marginRight: "100px", width: "186px", height: "auto" }}
      />
      <img
        src={patientFusion}
        alt="Patient Fusion icon"
        style={{ marginRight: "100px", width: "216px", height: "auto" }}
      />

      <img
        src={zoho}
        alt="Zoho icon"
        style={{ marginRight: "100px", width: "158px", height: "auto" }}
      />
    </Marquee>
  );
}
