//const URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
//const URL="https://api.openweathermap.org/data/2.5/weather?q=london&appid=469decb4fc8554e73130df6e73c64010";
//fetch(URL,{
//    method:"GET",
//})
//this is a promise. so we have to add then
//.then((response)=>{
//    return response.json();//it will pass the information in json format
//})
//.then((result)=>{
//    console.log(result);
//})
//or we can write like this without using promises
//const response= await fetch(URL,{
//    method:"GET",
//})
//const result=await response.json();
//console.log(result);
//let us start the another method by using axios
//though axios is installed, we have to aquire it first to use it.
//npm i axios require
const axios=require('axios');
axios.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=469decb4fc8554e73130df6e73c64010")
.then((res)=>{
    //console.log(res)
    //console.log(res.data);
    //or if you want the data in json format
    const data=res.json();
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
//axios does not work in browser. run in the integrated terminal only by typing the command-
//node fetch.js