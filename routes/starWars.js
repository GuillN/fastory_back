const express = require('express')
const router = express.Router()

const starWarsController = require('../controllers/starWars')

/**
 * @swagger
 * /starwars/list/{category}/{page}:
 *  get:
 *    summary: Gets a list of all Star Wars people, planets or starships
 *    description:
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        description: Category of the data to retrieve (People, Planets or Spaceships)
 *        schema:
 *          type: string
 *          enum:
 *              - people
 *              - planets
 *              - starships
 *      - in: path
 *        name: page
 *        required: true
 *        description: Page of results to be fetched
 *        schema:
 *          type: integer
 *          default: 1
 *    responses:
 *      200:
 *        description: A list of data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 */
router.get('/list/:category/:page', async (req, res) => {
    const result = await starWarsController.getAllResources(req.params.category, req.params.page, false)
    res.status(result.status).json(result.data)
})

/**
 * @swagger
 * /starwars/{category}/{id}:
 *  get:
 *    summary: Gets details of a Star Wars resource
 *    description:
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        description: Category of the data to retrieve
 *        schema:
 *          type: string
 *          enum:
 *              - films
 *              - planets
 *              - starships
 *              - vehicles
 *              - people
 *              - species
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID of the fetched value
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: A data object
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.get('/:category/:id', async (req, res) => {
    const result = await starWarsController.getOneResource(req.params.category, req.params.id)
    res.status(result.status).json(result.data)
})

/**
 * @swagger
 * /starwars/search/{category}/{name}:
 *  get:
 *    summary: Gets a list of a Star Wars resource by name
 *    description:
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        description: Category of the data to retrieve
 *        schema:
 *          type: string
 *          enum:
 *              - planets
 *              - starships
 *              - people
 *      - in: path
 *        name: name
 *        required: true
 *        description: Name of the fetched values
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A list of data
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 */
router.get('/search/:category/:search', async (req, res) => {
    const result = await starWarsController.getByName(req.params.category, req.params.search)
    res.status(result.status).json(result.data)
})

module.exports = router
