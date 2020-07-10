import pino from 'pino'
import { createPinoBrowserSend, createWriteStream } from 'pino-logflare'

// create pino-logflare stream for server logs sent to Logflare via http
const stream = createWriteStream({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "b1b334ff-686c-472d-8fd7-2411460053e1"
});

// create pino-logflare console stream for browser logs
const send = createPinoBrowserSend({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "b1b334ff-686c-472d-8fd7-2411460053e1"
});

// create pino loggger
const logger = pino({
    browser: {
        transmit: {
            send: send,
        }
    },
    level: "debug",
    base: {
        env: process.env.ENV || "ENV not set",
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
}, stream);

export default logger