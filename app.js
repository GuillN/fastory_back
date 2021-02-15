const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser');
const cors = require("cors");

const starWarsRoutes = require('./routes/starWars')
const authRoutes = require('./routes/auth')

const app = express()

const swaggerDefinition = {
    openapi: '3.0.3',
    info: {
        title: 'Fastory Backend Test',
        version: '1.0.0',
        description: 'API for Fastory technical test'
    }
}
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
}
const swaggerSpec = swaggerJSDoc(options)

app.use(bodyParser.json());

app.use(cors())
// app.use('/starwars', authenticator)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/starwars', starWarsRoutes)
app.use('/auth', authRoutes)

module.exports = app
