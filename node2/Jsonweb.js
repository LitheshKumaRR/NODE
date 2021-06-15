const jwt=require('jsonwebtoken')

let user={
    id:'123',
    name:'lithesh',
    email:"litheshkum@gmail.com"
}

let payload={
    id:user.id,
    name:user.name,
    email:user.email
}

let secretkey="aabbcc";

let token=jwt.sign(payload,secretkey,{expiresIn:60*60});

console.log(token)

jwt.verify(token,secretkey,(err,data)=>{
    if (err) throw err;
    console.log(data)

});