import { addClient } from '../../utils/sse'

export default defineEventHandler((event) => {
    // Enable SSE
    setHeader(event, 'Content-Type', 'text/event-stream')
    setHeader(event, 'Cache-Control', 'no-cache')
    setHeader(event, 'Connection', 'keep-alive')
    setResponseStatus(event, 200) // Explicit 200 OK

    // Add this request/user to our broadcast list
    addClient(event)
    
    // Prevent Nuxt from closing the response automatically
    event._handled = true
})
