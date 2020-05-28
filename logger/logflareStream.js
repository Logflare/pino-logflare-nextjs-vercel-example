import { createWriteStream } from 'pino-logflare';

export default createWriteStream({
    apiKey: process.env.LOGFLARE_INGESET_API_KEY || "S85LoAXJUB8U",
    // pino-logflare 0.1.0
    source: process.env.LOGFLARE_SOURCE_ID || "2c4b59bd-55e9-4798-af16-17dd42a96272",
    size: 1,
    // pino-logflare 0.2.0
    sourceToken: process.env.LOGFLARE_SOURCE_ID || "2c4b59bd-55e9-4798-af16-17dd42a96272",
    batchMaxSize: 1
});