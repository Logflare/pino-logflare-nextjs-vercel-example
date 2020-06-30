import logger from '../logger/logger'

function handleWebVitals(metric) {
    return {
        ...metric,
        startTime: Math.round(metric.startTime),
        value: Math.round(metric.value)
    }
}

export function reportWebVitals(metric) {
    const formattedMetric = handleWebVitals(metric)
    const webVitals = logger.child({ web_vitals: formattedMetric })
    webVitals.info("Web vitals!")
}

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp