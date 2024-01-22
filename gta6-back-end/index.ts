import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

app.post('/api', async (req, res) => {
	const { email, name } = req.body
	if (!email || !name)
		return res.status(400).send('Email or name required fields')
	console.log(req.body)

	try {
		const createdRow = await prisma.waitList.create({
			data: {
				email,
				name,
				date: new Date(),
			},
		})

		res.json(createdRow)
	} catch (err) {
		res.status(400).send({ message: err })
	}
})
const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
