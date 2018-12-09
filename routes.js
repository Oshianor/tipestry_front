const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/')
routes.add('login', '/login')
routes.add('register', '/register')
routes.add('about', '/about-us/')
routes.add('profile', '/profile/:username')
