const http=require('http');
const app=require('./app');
const port=process.env.PORT||3000;
// In Node.js, process is a global object that provides information about the currently running program.

const server=http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
// here we are not going to use any fixed kind of port. the port we are going to use ,we will get to know through the environmnt variables.