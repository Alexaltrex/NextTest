// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface INextApiRequest extends NextApiRequest {
  query: {
    name: string
  }
}

type IData = string

// http://localhost:3000/api/hello?name=test
export default function handler(
  req: INextApiRequest,
  res: NextApiResponse<IData>
) {
  res.status(200).json(req.query.name ?? 'John Doe')
  //res.status(200).json({ name: req.query.name ?? 'John Doe' })
}
