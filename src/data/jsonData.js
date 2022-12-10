const csv=require('csvtojson')
const csvFilePath="./dataSource.csv"
const fs = require('fs');

const data=async(csvFilePath)=>{
    const jsonArray=await csv().fromFile(csvFilePath);
    var json = JSON.stringify(jsonArray);
    fs.writeFile('data.json',json,'utf8',()=>{
        console.log("success");
    });
}

data(csvFilePath);