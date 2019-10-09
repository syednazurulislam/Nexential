var express = require('express');
var route = express.Router();
var controller=require("./controllers/controllers");
//routing for maincategory curd operation
route.post('/addcategory',controller.addcategory);
route.post('/getcategory',controller.getcategory);
route.post('/removecategory',controller.removecategory);
route.post('/updatecategory',controller.updatecategory);

//routing for Product curd operation
route.post('/addproduct',controller.addproduct);
route.post('/getproducts',controller.getproducts);
route.post('/removeproduct',controller.removeproduct);
route.post('/updateproduct',controller.updateproduct);
 
module.exports= route;