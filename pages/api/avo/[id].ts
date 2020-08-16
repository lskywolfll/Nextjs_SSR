import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getAvoByID = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const id = String(request.query.id)
  const db = new DB()

  const avo = await db.getById(id)

  response.status(200).json({
    ...avo,
  })
}

export default getAvoByID
