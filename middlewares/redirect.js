const redirect = {};

redirect.ifLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

redirect.ifNotLoggedIn = (route = '/login') =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

redirect.ifNotAuthorized = (route) =>
  (req, res, next) => (req.user.email !== req.params.email ? res.redirect(route) : next());

module.exports = redirect;
