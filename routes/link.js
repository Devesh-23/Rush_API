const express = require('express')
const router = express.Router()

const { getAllLinks} = require('../controller/link')

router.route('/').get(getAllLinks)

module.exports =  router 