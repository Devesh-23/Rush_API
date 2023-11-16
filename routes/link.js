const express = require('express')
const router = express.Router()

const { getAllLinks,getAppById} = require('../controller/link')

router.route('/').get(getAllLinks)
router.route('/app/:appName').get(getAppById)

module.exports =  router 