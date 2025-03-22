export type TAppointmentStatus = "not confirmed" | "confirmed" | "canceled" | "rescheduled"

export type TAppointment = {
    id: string
    start: Date
    end: Date
    title: string
    clientName: string
    clientPhone: string
    status: TAppointmentStatus
}

export type TNotificationAppointment = {
    appointmentUuid: string
    id: number
    message: string
    newEnd: string
    newStart: string
    type: string
}
