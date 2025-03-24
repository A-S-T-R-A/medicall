import drChrono from "../../images/drChrono.png";
import vcita from "../../images/vcita.png";
import kareo from "../../images/kareo.png";
import keap from "../../images/keap.png";
import oracle from "../../images/oracle.png";
import pipedrive from "../../images/pipedrive.png";
import squarespace from "../../images/squarespace.png";
import nextgen from "../../images/nextgen.png";
import salesforce from "../../images/salesforce.png";
import Marquee from "react-fast-marquee";

export function BottomMarquee() {
  return (
    <Marquee direction="right" speed={100}>
      <img
        src={drChrono}
        alt="drChrono icon"
        style={{ marginRight: "100px", width: "185px", height: "auto" }}
      />

      <img
        src={vcita}
        alt="Vcita icon"
        style={{ marginRight: "100px", width: "182px", height: "auto" }}
      />
      <img
        src={kareo}
        alt="Kareo icon"
        style={{ marginRight: "100px", width: "179px", height: "auto" }}
      />

      <img
        src={keap}
        alt="Keap icon"
        style={{ marginRight: "100px", width: "122px", height: "auto" }}
      />
      <img
        src={oracle}
        alt="Oracle icon"
        style={{ marginRight: "100px", width: "182px", height: "auto" }}
      />

      <img
        src={pipedrive}
        alt="Pipedrive icon"
        style={{ marginRight: "100px", width: "188px", height: "auto" }}
      />
      <img
        src={squarespace}
        alt="Squarespace icon"
        style={{ marginRight: "100px", width: "152px", height: "auto" }}
      />

      <img
        src={nextgen}
        alt="nextgen icon"
        style={{ marginRight: "100px", width: "182px", height: "auto" }}
      />
      <img
        src={salesforce}
        alt="Sales Force icon"
        style={{ marginRight: "100px", width: "100px", height: "auto" }}
      />
    </Marquee>
  );
}
