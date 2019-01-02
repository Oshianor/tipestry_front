const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('login', '/login')
routes.add('register', '/register')
routes.add('about', '/about-us/')
routes.add('topic', '/topics/:topicObjId/:topicName')
routes.add('profile', '/profile/:userObjId/:username')
routes.add('checkout', '/profile/:username/checkout/:id')
routes.add('editprofile', '/edit/:userObjId/:username')
routes.add('site', '/sites')
