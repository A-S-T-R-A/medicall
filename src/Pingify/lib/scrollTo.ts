export function scrollToForm() {
    document.getElementById("remindico-bottom-form")?.scrollIntoView({ behavior: "smooth" })
    document.getElementById("form-name-input")?.focus()
}

export function scrollToCalendar() {
    document.getElementById("remindico-calendar")?.scrollIntoView({ behavior: "smooth" })
    document.getElementById("calendar-name-input")?.focus()
}
