const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const chatController = require('../app/http/controllers/chatController')

const guest = require('../app/http/middlewares/guest')


function initRoutes(app) {
app.get('/', homeController().index)
app.get('/sdashboard', guest, homeController().sdashboard)
app.get('/mdashboard', guest, homeController().mdashboard)
app.get('/login', authController().login)
app.post('/login', authController().postLogin)
app.get('/register', authController().register)
app.post('/register', authController().postRegister)
app.get('/chatdb', chatController().index)
app.get('/chat.html', chatController().chat)

}

module.exports = initRoutes
