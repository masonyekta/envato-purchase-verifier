import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'envato'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const client = new Client({
		token: process.env.ENVATO_TOKEN as string,
		sandbox: process.env.SANDBOX === 'true',
	})
	const completion = await client.private.getSale(req.body.code)
	res.status(200).json({ result: completion })
}
