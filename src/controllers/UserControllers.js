import users from '../mocks/users.js'

const userss = {
  index(response){
    response.writeHead(
      200, 
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(users)); 

  } 
}

export default userss;