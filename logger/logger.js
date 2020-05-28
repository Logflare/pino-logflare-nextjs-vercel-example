import pino from 'pino';

const stream = require('./logflareStream').default

export default pino(
    {
        level: 'debug',
        base: {
            env: process.env.ENV || "ENV not set",
            revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
        },
        browser: {
            asObject: true,
            write: (o) => {
                const body = toLogEntry(o)
                postRequest(body)
            }
        }
    },
    stream,
);

const postRequest = async (lfRequestBody) => {
    const ingestApiKey = "S85LoAXJUB8U"
    const source_id = "f5f2c049-f3c7-4e90-bff6-0cff8b89638a"
    const logflareApiURL = `https://api.logflare.app/logs?api_key=${ingestApiKey}&source=${source_id}`


    const body = JSON.stringify(lfRequestBody)
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    }

    await fetch(logflareApiURL, request)
}

function toLogEntry(item) {
    // float to int web vitals until Logflare has a special Web Vitals endpoint
    const newItem = maybeNewWebVitals(item)
    const timestamp = newItem.time || new Date().getTime()
    const message = newItem.msg
    const level = levelToStatus(newItem.level)

    const metadata = _.omit(newItem, ["time", "msg", "level"])

    return {
        metadata: {
            ...metadata,
            level: level
        },
        log_entry: message,
        timestamp: timestamp,
    }
}

function levelToStatus(level) {
    if (level === 10 || level === 20) {
        return "debug"
    }
    if (level === 40) {
        return "warning"
    }
    if (level === 50) {
        return "error"
    }
    if (level >= 60) {
        return "critical"
    }
    return "info"
}

function maybeNewWebVitals(item) {
    if (item.web_vitals) {
        const wv = {
            id: item.web_vitals.id,
            label: item.web_vitals.label,
            name: item.web_vitals.name,
            startTime: zeroToAlmostZero(item.web_vitals.startTime),
            value: zeroToAlmostZero(item.web_vitals.value)
        }

        item.web_vitals = wv
        return item
    }
    return item
}

function zeroToAlmostZero(num) {
    if (num == 0) {
        return 0.00000000000001
    }
    return num
}