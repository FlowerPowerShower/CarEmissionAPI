const port = process.env.PORT || 8002;
const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")

const app = express()

var carslist = []

    
app.get("/GetCars", (req,res) => {
    var fs = require('fs');
    fs.readFile('cars.txt', function(err, data) {
        if(err) throw err;
        var data = (data.toString().replace(/['"]+/g, ''));
        var array = data.toString().split(",");

    for(i = 0;i<array.length;i++){
        
        model = array[i],
        engine =array[i+=1],
        offical_Euro_Class= array[i+=1],
        WTW_C02= array[i+=1],
        TTW_CO2 = array[i+=1],
        TestProg = array[i+=1]
        carslist.push({
            model,
            engine,
            offical_Euro_Class,
            WTW_C02,
            TTW_CO2,
            TestProg
        })   
        
    }
    carslist = carslist.map(function(obj) {
        return {
            model: obj.model, 
            engine: obj.engine,
            offical_Euro_Class : obj.offical_Euro_Class,
            WTW_C02 : parseInt(obj.WTW_C02),
            TTW_c02 : parseInt(obj.TTW_CO2),
            TestProg : obj.TestProg
        };
    });
    res.json(carslist)
 
});
})

app.get("/GetCars/:model", (req,res) => {
    
    res.json(req.body)
 
}) 






app.listen(port, () => console.log(`Port running on ${port}`)) 
















