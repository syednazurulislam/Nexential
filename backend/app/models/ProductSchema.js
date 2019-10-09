var mongoose= require('mongoose');
const ProductSchema=mongoose.Schema({
  
  CategoryName:{
    type:String,
    require:true
  },
  CategoryId:{
    type:String,
    require:true
  },
  productsName:{
    type:String,
    require:true
  }
});

const products=module.exports=mongoose.model('products', ProductSchema);