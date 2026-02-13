import ProductController from './controllers/ProductController.js'
import UserController from './controllers/UserControllers.js'





const routes = [
  {
    endpoint: '/users',
    handler: UserController.index
  },{
    endpoint: '/products', 
    handler: ProductController.index
  }
];

export default routes; 