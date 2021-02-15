const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

/**
 * @swagger
 * /auth/signin:
 *  post:
 *    summary: Signs the user in
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                description: The name of the user
 *                example: John
 *              password:
 *                type: string
 *                description: The password of the user
 *                example: secretPassword
 *    responses:
 *      200:
 *        description: A data object containing a JWT
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      401:
 *         description: A data object containing an error message
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 */
router.post('/signin', (req, res) => {
    console.log(req.body)
    const result = authController.signIn(req.body.username, req.body.password)
    res.status(result.status).json(result.data)
})

module.exports = router
