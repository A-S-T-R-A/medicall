import {
  addDays,
  setHours,
  setMinutes,
  getDay,
  subWeeks,
  addWeeks,
} from "date-fns";
import { toZonedTime, fromZonedTime } from "date-fns-tz";
import { v4 as uuidv4 } from "uuid";
import type { TAppointment } from "../types";
import { TOMEZONE } from "../const/const";

export const buildUnavailability = (startDate: Date, timeZone: string) => {
  const events = [];

  // Calculate the start date 3 weeks before and end date 3 weeks after
  const startFrom = subWeeks(startDate, 3); // 3 weeks before
  const endAt = addWeeks(startDate, 3); // 3 weeks after

  const numOfDays = Math.ceil(
    (endAt.getTime() - startFrom.getTime()) / (1000 * 60 * 60 * 24)
  ); // Number of days between

  for (let i = 0; i < numOfDays; i++) {
    const currentDate = addDays(startFrom, i);
    const zonedDate = toZonedTime(currentDate, timeZone); // Adjust for timezone
    const dayOfWeek = getDay(zonedDate); // 0 for Sunday, 6 for Saturday

    if (dayOfWeek === 6 || dayOfWeek === 0) {
      // Block the entire Saturday
      const saturdayStart = fromZonedTime(
        setMinutes(setHours(zonedDate, 0), 0),
        timeZone
      ); // 12:00 AM in timezone
      const saturdayEnd = fromZonedTime(
        setMinutes(setHours(zonedDate, 23), 59),
        timeZone
      ); // 11:59 PM in timezone

      events.push({
        id: `unavailable-saturday-${i}`,
        start: saturdayStart,
        end: saturdayEnd,
        title: "Unavailable (Saturday)",
        status: "unavailable",
      });
    } else {
      // Before 9 AM (e.g. 12:00 AM to 9:00 AM)
      // const earlyMorningStart = fromZonedTime(setMinutes(setHours(zonedDate, 0), 0), timeZone); // 12:00 AM
      // const earlyMorningEnd = fromZonedTime(setMinutes(setHours(zonedDate, 9), 0), timeZone); // 9:00 AM

      // events.push({
      //   id: `unavailable-early-${i}`,
      //   start: earlyMorningStart,
      //   end: earlyMorningEnd,
      //   title: "Unavailable (before working hours)",
      //   status: "unavailable",
      // });

      // After 5 PM (e.g. 5:00 PM to 11:59 PM)
      const eveningStart = fromZonedTime(
        setMinutes(setHours(zonedDate, 17), 0),
        timeZone
      ); // 5:00 PM
      const eveningEnd = fromZonedTime(
        setMinutes(setHours(zonedDate, 23), 59),
        timeZone
      ); // 11:59 PM

      events.push({
        id: `unavailable-late-${i}`,
        start: eveningStart,
        end: eveningEnd,
        title: "Unavailable (after working hours)",
        status: "unavailable",
      });
    }
  }

  return events;
};

export const getRelevantTuesdayDate = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)

  let daysUntilTuesday;
  if (dayOfWeek >= 2 && dayOfWeek <= 5) {
    // If it's between Tuesday (2) and Friday (5), return this Tuesday
    daysUntilTuesday = (dayOfWeek - 2) * -1; // Go back to this Tuesday
  } else {
    // If it's Saturday (6), Sunday (0), or Monday (1), calculate next Tuesday
    daysUntilTuesday = (9 - dayOfWeek) % 7; // Calculate days until next Tuesday
  }

  const relevantTuesday = new Date(today);
  relevantTuesday.setDate(today.getDate() + daysUntilTuesday); // Set date to the relevant Tuesday

  // Remove time portion
  relevantTuesday.setHours(0, 0, 0, 0); // Set time to midnight to ensure only the date is returned

  return relevantTuesday;
};

export function createInitialAppointment(): TAppointment {
  const startDate = toZonedTime(new Date(), TOMEZONE); // Convert current date to the specific timezone

  const dayOfWeek = startDate.getDay(); // Get the current day of the week (0 for Sunday, 6 for Saturday)

  if (dayOfWeek === 6 || dayOfWeek === 0) {
    // If it's Saturday (6) or Sunday (0), set start date to next week's Tuesday
    const daysUntilNextTuesday = (9 - dayOfWeek) % 7;
    startDate.setDate(startDate.getDate() + daysUntilNextTuesday);
    startDate.setHours(9, 0, 0, 0); // Set time to 9 AM in the local timezone
  } else if (dayOfWeek === 5) {
    // If it's Friday (5), set start date to today at 9 AM
    startDate.setHours(9, 0, 0, 0); // Set time to 9 AM in the local timezone
  } else {
    // For Monday (1), Tuesday (2), Wednesday (3), or Thursday (4), set start date to next day at 9 AM
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(9, 0, 0, 0); // Set time to 9 AM in the local timezone
  }

  // End date is 2 hours after start date
  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + 2);

  // Convert the dates back to UTC before saving
  const utcStartDate = fromZonedTime(startDate, TOMEZONE);
  const utcEndDate = fromZonedTime(endDate, TOMEZONE);

  // Create the appointment object
  const appointment: TAppointment = {
    id: uuidv4(),
    start: utcStartDate,
    end: utcEndDate,
    title: "New Appointment",
    clientName: "",
    clientPhone: "",
    status: "not confirmed",
  };

  return appointment;
}
