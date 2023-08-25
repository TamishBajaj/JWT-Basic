
const express=require('express')
const router=express.Router()

const {login,dashboard}=require('../controllers/main')

const authMiddleware = require('../middleware/auth')
// Whenever anyone hits thisdashboared route this middleware will work for authentication
router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports=router
