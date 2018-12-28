const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('login', '/login')
routes.add('register', '/register')
routes.add('about', '/about-us/')
routes.add('topic', '/topics/:topicName/:topicId')
routes.add('profile', '/profile/:username')
routes.add('checkout', '/profile/:username/checkout/:id')
routes.add('editprofile', '/editprofile/:username/id')
routes.add('site', '/site/:siteName')
