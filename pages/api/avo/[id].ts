import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)

  response.statusCode = 200 // ok
  response.setHeader('Content-type', 'appliation/json')
  response.end(JSON.stringify(entry))
  //Other wide
  //response.status(200).json({ data: entry })
}

export default allAvos
