import { prepObjectKeys } from "../../logger/utils"
import logger from '../../logger/logger'

export default (req, res) => {

  logger.info("Getting headers")

  const headers = prepObjectKeys(req.headers)

  logger.info({
    request: {
      headers: headers,
      url: req.url,
      method: req.method
    },
    response: {
      statusCode: res.statusCode
    }
  },
    "API request")

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};