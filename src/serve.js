import http  from 'node:http';  
import routes  from'./routes.js';
import erros  from './errors.js'; 
import url from 'node:url'; 

http.createServer(function (request, response) {

  const parsed_url = url.parse(request.url); 
  console.log(parsed_url)


  const router = routes.find(function(route){
    return request.url === route.endpoint; 
  });
  if (router) { 
    router.handler(response); 
    return; 
  }
  erros.notFound(response);
}).listen(3000); 
