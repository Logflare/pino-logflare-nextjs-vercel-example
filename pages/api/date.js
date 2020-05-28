import { prepObjectKeys } from "../../logger/utils"
const logger = require('../../logger/logger').default

export default (req, res) => {

  const headers = prepObjectKeys(req.headers)

  logger.info({ request: { headers: headers } }, "API request")

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};