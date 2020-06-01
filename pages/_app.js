const logger = require('../logger/logger').default

export function reportWebVitals(metric) {
    // to log vitals through Pino
    // logger.info({ web_vitals: metric }, "Web vitals!")

    // or to send to Logflare w/o Pino
    toLogflare({ web_vitals: metric, url: window.document.URL })
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

const toLogflare = async (data) => {
    const ingestApiKey = "S85LoAXJUB8U"
    const source_id = "9bbd8cb4-4c36-463b-888e-172c701e203c"
    const logflareApiURL = `https://api.logflare.app/logs/json?api_key=${ingestApiKey}&source=${source_id}`

    // Make Web Vitals ints for now
    const preppedData = handleWebVitals(data)


    const body = JSON.stringify(preppedData)
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
    }

    await fetch(logflareApiURL, request)
}

function handleWebVitals(data) {
    if (data.web_vitals) {
        const wv = {
            id: data.web_vitals.id,
            label: data.web_vitals.label,
            name: data.web_vitals.name,
            startTime: Math.round(data.web_vitals.startTime),
            value: Math.round(data.web_vitals.value)
        }

        data.web_vitals = wv
        return data
    }
    return data
}

export default MyApp