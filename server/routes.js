

/**
 * 
 */
module.exports = function (app) {
    //用户
    // const userApi = require('./api/user/index');
    app.use('/api/user', require('./api/user/index'));

    console.log(' app   -----------');



};
