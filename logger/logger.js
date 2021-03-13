import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "3506f105-02a6-4118-bbb4-3f05e5d684b2"
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
        processes_str: JSON.stringify(process.versions),
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
}, stream);




export default logger