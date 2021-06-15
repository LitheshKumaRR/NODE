const fs=require('fs')

let data=fs.readFileSync("data.txt","utf-8")
console.log(data)

fs.writeFileSync("data2.txt",data)