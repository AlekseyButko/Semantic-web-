import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import swaggerUi from 'swagger-ui-express'
import institutionsRouter from './routes/institutions.js'
import swaggerDocument from './swagger/swagger-output.json' assert { type: 'json' }

const app = express()
const PORT = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/institutions', institutionsRouter)

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
