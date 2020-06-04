import { prepObjectKeys } from "../../logger/utils"
const logger = require('../../logger/logger').default

export default (req, res) => {

  console.info("Getting headers")

  const headers = prepObjectKeys(req.headers)

  const data = {
    request: {
      headers: headers,
      url: req.url,
      method: req.method
    },
    response: {
      statusCode: res.statusCode
    }
  }

  console.info("LABEL", JSON.stringify(data))

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};