const category= require('../models/CategorySchema');
const product= require('../models/ProductSchema');

exports.addcategory=function(req,res,next){
    console.log(req.body.CategoryName);
let categoryname=new category(req.body);
categoryname.save((err, categoryname) => {
    if (err) {
        res.json(err);
    } else {

        console.log("categoryname is"+categoryname);

        res.json({mgs:"Successfully"});
    }
});
}

exports.getcategory=function(req,res,next){
    category.find({}, function (err, categorys) {
        if(err){
            console.log(err)
        }else{
            console.log(categorys);
            res.json(categorys)
        }
    })
}

exports.removecategory=function(req,res,next){
var id=req.body._id;
    category.deleteOne({_id:id}).then(result=>{
console.log(result);
res.json(result);
})
}


exports.updatecategory=function(req,res,next){
    console.log(req.body)
    var id=req.body._id;
    var update={'CategoryName':req.body.CategoryName}
    category.updateOne({_id:id},{$set:update}).then(result=>{
console.log(result);
res.json(result);
})
}


exports.addproduct=function(req,res,next){
    console.log("in addproduct")
    console.log(req.body);
    let productdetails=new product(req.body);
    productdetails.save((err, productdetails) => {
        if (err) {
            res.json(err);
        } else {
            console.log("productdetails is"+productdetails);
            res.json({mgs:"Successfully"});
        }
    });
}

exports.getproducts=function(req,res,next){
    // console.log()
    product.find(req.body, function (err, products) {
        if(err){
            console.log(err)
        }else{
            console.log(products);
            res.json(products)
        }
    })
}


exports.removeproduct=function(req,res,next){
    var id=req.body._id;
    product.deleteOne({_id:id}).then(result=>{
console.log(result);
res.json(result)
})
}


exports.updateproduct=function(req,res,next){
    console.log(req.body)
    var id=req.body._id;
    var update={'productsName':req.body.productsName}
    product.updateOne({_id:id},{$set:update}).then(result=>{
console.log(result);
res.json(result)
})
}