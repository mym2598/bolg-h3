const mongoose = require('mongoose')
mongoose.connect('mongodb://106.12.59.185:27017/blog',(err)=>{
  if (err){
    console.log('连接失败')
    return
  }else{
    console.log('数据库连接成功')
  }
})


module.exports = mongoose;
