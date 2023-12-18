const express=require("express");
const app=express();
const path=require("path");
const http=require("http");
const server=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(server);
app.use("/",express.static(path.join(__dirname,"public")));
const port=3000;
server.listen(port,()=>{
    console.log(`chat server is working at port ${port}`);
})