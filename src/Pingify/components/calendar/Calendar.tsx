import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
  Views,
  type ToolbarProps,
} from "react-big-calendar";
import moment from "moment";
// import "moment/locale/en-gb";
import "moment-timezone";
import { format, toZonedTime } from "date-fns-tz";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Calendar.module.scss";
import medicallIcon from "../../icons/medicallIcon.svg";
import starsIcon from "../../icons/starsIcon.svg";
import arrowIcon from "../../icons/arrowIcon.svg";
import swipeIcon from "../../icons/swipeIcon.svg";
import "./Calendar.scss";
import { useState, type CSSProperties } from "react";
import type { TAppointment } from "./types";
import { AppointmentModal } from "./AppointmentModal";
import { PingifyCalling } from "./PingifyCalling";
import { StartFreeModal } from "./StartFreeModal";
import { useEventSourcing } from "./lib/useEventSourcing";
import { createInitialAppointment, getRelevantTuesdayDate } from "./lib/lib";
import { TOMEZONE } from "./const/const";
import roundArrow from "../../icons/roundArrow.svg";
import { scrollToCalendar } from "../../lib/scrollTo";

moment.locale("en-gb", { week: { dow: 1 } });
moment.tz.setDefault(TOMEZONE);
const localizer = momentLocalizer(moment);

type TCustomToolbar = ToolbarProps<TAppointment>;

const CustomToolbar = (toolbarProps: TCustomToolbar) => {
  const date = toolbarProps.label.split(" ");
  const formatedDate = `${date[0].slice(0, 3)} ${date[1]}-${date[3]}, ${format(
    new Date(),
    "yyyy"
  )}`;

  return (
    <div className={styles.toolbar}>
      <button
        className={styles.todayBtn}
        onClick={() => toolbarProps.onNavigate("TODAY")}
      >
        Today
      </button>
      <button
        className={styles.prevBtn}
        onClick={() => toolbarProps.onNavigate("PREV")}
      >
        <img src={arrowIcon} alt="Arrow icon" />
      </button>
      <button
        className={styles.nextBtn}
        onClick={() => toolbarProps.onNavigate("NEXT")}
      >
        <img src={arrowIcon} alt="Arrow icon" />
      </button>
      <span className={styles.label}>{formatedDate}</span>
    </div>
  );
};

export function Calendar() {
  const [stage, setStage] = useState(0);
  const [currentDate, setCurrentDate] = useState(getRelevantTuesdayDate());
  const [appointments, setAppointments] = useState<TAppointment[]>(() => [
    createInitialAppointment(),
  ]);

  useEventSourcing({
    appointmentId: appointments[0].id,
    cb: (data) => {
      if (data.status !== "ended") {
        setAppointments((prev) => {
          const status = data.type as TAppointment["status"];
          const newAppointment: TAppointment = {
            ...prev[0],
            start: new Date(data.newStart),
            end: new Date(data.newEnd),
            status,
          };

          return [newAppointment];
        });
        setStage(2);
      }
    },
  });

  function restartHandler() {
    setStage(0);
    scrollToCalendar();
    setAppointments([createInitialAppointment()]);
  }

  return (
    <div className={styles.calendar}>
      <PingifyCalling isOpen={stage === 1} />
      <AppointmentModal
        isOpen={stage !== 1}
        onSubmit={() => setStage(1)}
        appointment={appointments[0]}
      />

      <p className={styles.behave}>
        Behave naturally, try to cancel or reschedule appointment{" "}
        <img className={styles.arrow} src={roundArrow} alt="Arrow" />
      </p>

      <div className={styles.calendarOverflow}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img
              className={styles.pingifyIcon}
              src={medicallIcon}
              alt="Pingify"
            />
            <h2 className={styles.title}>Pingify</h2>
            <img src={starsIcon} alt="Stars icon" />
            <p>AI Voice Assistant </p>
          </div>
          <ReactBigCalendar
            style={{ width: "100%", height: "100%", marginBottom: "-2px" }}
            events={appointments}
            startAccessor="start"
            endAccessor="end"
            localizer={localizer}
            // defaultDate={getRelevantTuesdayDate()}
            date={currentDate}
            onNavigate={(date) => setCurrentDate(date)}
            views={{
              month: false,
              day: false,
              week: true,
            }}
            formats={{ timeGutterFormat: "HH:mm", agendaTimeFormat: "HH:mm" }}
            step={60} // Each slot represents 15 minutes
            timeslots={1} // 4 slots per hour, creating a more granular display
            min={new Date(1970, 1, 1, 10, 0, 0)} // Start at 08:00
            max={new Date(1970, 1, 1, 19, 0, 0)} // End at 15:00
            toolbar
            defaultView={Views.WEEK}
            selectable
            dayLayoutAlgorithm="no-overlap"
            components={{
              toolbar: CustomToolbar,
              header: (props) => {
                const label = props.label.split(" ");

                return (
                  <div
                    className="dayHeaderCell"
                    style={{
                      height: "40px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>
                      <span>{label[0]}</span>
                      {label[1]}
                    </p>
                  </div>
                );
              },

              eventWrapper: (props) => {
                const { event, style } = props;
                const { top, height, width, left } = style as CSSProperties;

                const customStyle: CSSProperties = {
                  position: "absolute",
                  top: `${top}%`,
                  height,
                  width,
                  left,
                };

                return (
                  <div style={customStyle} className={styles.eventWrapper}>
                    <div className={styles.eventHeader}>
                      <p className={styles.time}>
                        {format(toZonedTime(event.start, TOMEZONE), "HH:mm")} -{" "}
                        {format(toZonedTime(event.end, TOMEZONE), "HH:mm")}
                      </p>
                      <p className={`${styles.status} ${styles[event.status]}`}>
                        {event.status}
                      </p>
                    </div>

                    <p className={styles.eventTitle}>
                      New <br /> Appointment
                    </p>
                  </div>
                );
              },
            }}
          />
        </div>
      </div>
      <p className={styles.swipe}>
        <img src={swipeIcon} alt="swipe icon" />
        swipe calendar left & right <br /> to see result of your call
      </p>
      <StartFreeModal isOpen={stage === 2} onCallAgain={restartHandler} />
    </div>
  );
}
