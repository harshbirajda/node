var express=require('express');
var app=express();
var companyController=function(req,res)
{
var company=[
{id:1,name:"user",description:"user details"},
{id:2,name:"company",description:"company details"},
{id:3,name:"employee",description:"employee details"},
{id:4,name:"branch",description:"branch details"},

]
res.send(company);
};

app.get('/company',companyController);
var server=app.listen(3000,function(){
var host=server.address().host;
var port=server.address().port;
console.log("server is listening on port 3000",host,port);

})