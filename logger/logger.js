import pino from 'pino'
import { logflarePinoVercel } from "pino-logflare"
import _ from "lodash"

// create pino-logflare console stream for serverless functions and send function for browser logs
const stream = createWriteStream({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "b1b334ff-686c-472d-8fd7-2411460053e1"
});

const send = createPinoBrowserSend({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "b1b334ff-686c-472d-8fd7-2411460053e1"
});

// create pino loggger
const logger = pino({
    browser: {
        transmit: {
            level: "info",
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