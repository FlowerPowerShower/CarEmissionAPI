const port = process.env.PORT || 8002;
const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require('fs');

const app = express()


var carslist = []

app.get("/", (req,res) => {
    res.json("Welcome to this API(beta) more functionality to come, get cars with /GetCars")
})

    
app.get("/GetCars", (req,res) => {
    
    
    fs.readFile('cars.txt', function(err, data) {
        if(err) throw err;
        var data = (data.toString().replace(/['"]+/g, ''));
        var array = data.toString().split(",");

    for(i = 0;i<array.length;i++){
        
        model = array[i],
        engine =array[i+=1],
        offical_Euro_Class= array[i+=1],
        WTW_C02a= array[i+=1],
        WTW_CO2 = parseInt(WTW_C02a),
        TTW_CO2a = array[i+=1],
        TTW_CO2 = parseInt(TTW_CO2a)
        if(TTW_CO2 <= 0){
            TTW_CO2 = "NA"
        }
        TestProg = array[i+=1]
  

        carslist.push({
            model,
            engine,
            offical_Euro_Class,
            WTW_CO2,
            TTW_CO2,
            TestProg
        })  
  
    }
        
    });
       res.json(carslist)
 
});


app.listen(port, () => console.log(`Port running on ${port}`)) 
















