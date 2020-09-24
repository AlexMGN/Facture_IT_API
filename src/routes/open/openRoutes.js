const { validateRequest } = require('../../utils/validators');

module.exports = (router, check, openRoutesMethods) => {

    /* Users */
    router.post('/register', validateRequest('register'), openRoutesMethods.register);

    /* Google */

    return router

}