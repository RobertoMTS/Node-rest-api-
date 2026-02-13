import products from '../mocks/produts.js'

const productts = {
  index(response) {
    
    response.writeHead(
      200, 
      {'content-type': 'application/json'}
    ); 
    
    response.end(JSON.stringify(products)); 

  } 
}

export default productts; 