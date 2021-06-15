const fs=require('fs')

fs.readFile('data.txt',"utf-8",(err,data)=>{
    if(err) throw err
    fs.writeFile("data3.txt",data,(err)=>{
        console.log('written successfully')

    })
    
})