import pino from 'pino'
import { logflarePinoVercel } from "pino-logflare"
import _ from "lodash"

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
    apiKey: "sJPgBPa0YxuB",
    sourceToken: "5065880e-bd10-4c5a-b2e8-e7632edb469a"
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