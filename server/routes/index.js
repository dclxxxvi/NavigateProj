const Router = require('express')
const router = new Router()
const videoRouter = require('./videoRouter')


router.use('/video', videoRouter)

module.exports = router
