const fs =require('fs')

fs.readFile("customer.json","utf-8",(err,data)=>{
    if (err) throw err
    let datas=JSON.parse(data)
    console.log(datas)
    fs.writeFile("customer2.json",JSON.stringify(datas),(err)=>{
        console.log('written succesfully')
    })
})