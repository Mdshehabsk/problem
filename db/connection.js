const mongoose = require('mongoose');


const connect = async ()=>{
     mongoose.connect('mongodb://localhost:27017/crud')
     .then(data=>console.log(`db connect successfull`))
     .catch(err=>console.log(err))
}

module.exports = connect