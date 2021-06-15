const bcrypt=require('bcryptjs')

let userDetails={
    name:'lithesh',
    Age:21,
    Password:"lithu@199"
}

let salt=bcrypt.genSaltSync(10);
newPassword=bcrypt.hashSync(userDetails.Password,salt)

console.log(newPassword)

userDetails={...userDetails,Password:newPassword}
console.log(userDetails)

if(bcrypt.compareSync('lithu@199',userDetails.Password)){
    console.log('password matches')
}else{
    console.log('password doesnt match')
}