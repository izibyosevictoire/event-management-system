


const User = require('../models/user.models')

async function Register(req, res)  {

        console.log(req.body);
        
        try{
      
             await User.create({
              name:req.body.name,
              email:req.body.email,
              password:req.body.password,
             })
             res.json({status:"OK"});
        }catch(err)
        {   
              console.log(err);
              res.json({status:'error',error:'Duplicate email'});
        }
      
        
}

module.exports ={
    Register,
}
