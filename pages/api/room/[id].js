import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { single, update, destroy } from '../../../controllers/roomController'
import onError from '../../../middlewares/errors'

const handler = nc({ onError });
dbConnect();

handler.get(single)
handler.put(update)
handler.delete(destroy)


export default handler;