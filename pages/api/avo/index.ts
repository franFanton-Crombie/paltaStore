import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  response.statusCode = 200 // ok
  response.setHeader('Content-type', 'appliation/json')
  response.end(JSON.stringify({ data: allEntries, length: length }))
}

export default allAvos
