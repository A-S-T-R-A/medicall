import type { TAppointment } from "../types"

export const baseURL = "https://backend-remindico-dev.aux-estimato.xyz"

export async function postCreateAppointment(payload: TAppointment) {
    const dataToSend = {
        ...payload,
        start: payload.start.getTime(),
        end: payload.end.getTime(),
        uuid: payload.id,
    }

    fetch("https://backend-remindico-dev.aux-estimato.xyz/form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: payload.clientName,
            phone: payload.clientPhone,
            email: "from@calendar.com",
        }),
    })

    const response = await fetch(`${baseURL}/landing/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
    })

    if (!response.ok) {
        throw new Error(`Failed to create appointment: ${response.statusText}`)
    }
}

export async function postSendReminder({ appointmentId }: { appointmentId: string }) {
    const response = await fetch(`${baseURL}/landing/appointments/${appointmentId}/make-call`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    })

    if (!response.ok) {
        throw new Error(`Failed to send reminder: ${response.statusText}`)
    }
}
