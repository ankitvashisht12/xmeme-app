const express = require("express");
const router = express.Router();
const controller = require("../controllers/meme");

/**
 * @swagger
 *
 * /memes/{id}:
 *   get:
 *    summary: returns single meme for particular id
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: Success 
 *      '404': 
 *        description: Meme not found
 */

router.get("/memes/:id", controller.getMeme);



/**
 * @swagger
 *
 * /memes:
 *   get:
 *    summary: returns list of recent 100 memes 
 *    responses:
 *      '200':
 *        description: Success
 *      '500':
 *        description: Internal Server error
 */
router.get("/memes", controller.getMemes);

/**
 * @swagger
 *
 * /memes:
 *   post:
 *    summary: creates a meme
 *    parameters:
 *      - name: name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: caption 
 *        in: formData
 *        required: true
 *        type: string
 *      - name: url
 *        in: formData
 *        required: true
 *        type: string 
 *    responses:
 *      '201':
 *        description: Meme created succesfully         
 *      '500':
 *        description: Internal Server Error
 */
router.post("/memes", controller.postMeme);


/**
 * @swagger
 *
 * /memes/{id}:
 *   patch:
 *    summary: updates a meme
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: string
 *      - name: caption
 *        in: formData
 *        required: true
 *        type: string
 *      - name: url
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: Meme updated successfully
 *      '404':
 *        description: Meme not found
 *      '409':
 *        description: Meme already present
 */
router.patch("/memes/:id", controller.updateMeme);

module.exports = router;