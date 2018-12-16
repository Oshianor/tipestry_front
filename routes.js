const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('login', '/login')
routes.add('register', '/register')
routes.add('about', '/about-us/')
routes.add('profile', '/profile/:username')
routes.add('editprofile', '/editprofile/:username/id')
routes.add('topic', '/topics/:topicName/:topicId')
routes.add('site', '/site/:siteName')
