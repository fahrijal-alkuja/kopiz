import { H3Event } from 'h3'

// Store active clients
const clients = new Set<H3Event>()

// Send heartbeat every 20 seconds
setInterval(() => {
    if (clients.size > 0) {
        for (const client of clients) {
             try {
                 client.node.res.write(': keepalive\n\n')
             } catch (e) {
                 clients.delete(client)
             }
        }
    }
}, 20000)

/**
 * Add a new client to the SSE stream
 */
export function addClient(event: H3Event) {
    clients.add(event)
    
    // Remove client when connection closes
    event.node.req.on('close', () => {
        clients.delete(event)
    })
}

/**
 * Send an event to all connected clients
 */
export function broadcastEvent(event: string, data: any = {}) {
    // Format for SSE: "event: name\ndata: JSON\n\n"
    const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
    
    for (const client of clients) {
        try {
            client.node.res.write(message)
        } catch (e) {
            // Should be handled by close event, but just in case
            clients.delete(client)
        }
    }
}
