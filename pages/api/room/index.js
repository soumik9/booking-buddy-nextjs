import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { index, create } from '../../../controllers/roomController'
import onError from '../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.get(index)
handler.post(create)

export default handler;