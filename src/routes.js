const UserController = require('./controllers/UserControllers');
const routes = require('./mocks/users'); 


module.exports = [
  {
    endpoint: '/users',
    handler: UserController.getUsers
  }
];