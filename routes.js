const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add("recent", "/recent");
routes.add('login', '/login');
routes.add('register', '/register');
routes.add("forgotPassword", "/forgotpassword");
routes.add("verification", "/verify/email-address/:token");
routes.add("resetPassword", "/reset/password/:token");
routes.add("controlpanel", "/controlpanel/:token");
routes.add("faq", "/faq");
routes.add("site-verification", "/site-verification/:siteObjId/:token");
routes.add('topic', '/topics/:topicObjId/:topicName');
routes.add('profile', '/profile/:userObjId/:username');
routes.add('tipreport', '/tip/report/:userObjId');
routes.add('editprofile', '/edit/:userObjId/:username');
routes.add('site', '/sites');
routes.add('contests', '/contests');
routes.add('privacypolicy', '/privacypolicy');
routes.add('terms', '/terms');
routes.add("userinfo", "/users/details");
routes.add("whitepaper", "/whitepaper");
routes.add('hashtag', '/hashtag');