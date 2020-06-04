import { prepObjectKeys } from "../../logger/utils"
const logger = require('../../logger/logger').default

export default (req, res) => {

  console.info("Getting headers")

  const headers = prepObjectKeys(req.headers)

  console.info("API request:", {
    request: {
      headers: headers,
      url: req.url,
      method: req.method
    },
    response: {
      statusCode: res.statusCode
    }
  }
  )

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};