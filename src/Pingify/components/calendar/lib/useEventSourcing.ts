import { EventSourcePolyfill } from "event-source-polyfill"
import { useEffect } from "react"

export const baseURL = "https://backend-remindico-dev.aux-estimato.xyz"

export function useEventSourcing({ appointmentId, cb }: { appointmentId: string; cb: (data: any) => void }) {
    useEffect(() => {
        const eventSource = subscribe()

        return () => {
            eventSource.close()
        }
    }, [])

    function subscribe() {
        const eventSource = new EventSourcePolyfill(`${baseURL}/landing/sse/connect/${appointmentId}`, {
            heartbeatTimeout: 290000,
        })

        eventSource.addEventListener("newMessage", function (event: any) {
            cb(JSON.parse(event.data))
        })

        return eventSource
    }
}
