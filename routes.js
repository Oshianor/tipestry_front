const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('login', '/login')
routes.add('register', '/register')
routes.add('forgotPassword', '/forgotpassword')
routes.add('faq', '/faq')
routes.add('topic', '/topics/:topicObjId/:topicName')
routes.add('profile', '/profile/:userObjId/:username')
routes.add('tipreport', '/tip/report/:userObjId')
routes.add('editprofile', '/edit/:userObjId/:username')
routes.add('site', '/sites')
