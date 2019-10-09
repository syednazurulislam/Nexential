var mongoose= require('mongoose');
const CategorySchema=mongoose.Schema({
  
  CategoryName:{
    type:String,
    require:true
  }
 
 
});

const categorys=module.exports=mongoose.model('categorys', CategorySchema);