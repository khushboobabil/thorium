let axios = require("axios")

let getCountry = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result);
        let data = result.data
        //console.log(data);
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getAllCountry = async function (req, res) {

    try {
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let tempOfCities=[];
        for(let i=0;i<cities.length;i++)
        {
        let checkCity= {city:cities[i]};
        
       
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1b8cbf61cf91c404345a72ea98a3c238`);
        console.log(result);
        let gettingTemp=result.data.main.temp;
        console.log(gettingTemp);
        checkCity.temp=gettingTemp;
        tempOfCities.push(checkCity);
    }
       let tempSortedCities=tempOfCities.sort(function(x,y){return x.temp-y.temp});

        res.status(200).send({ status: true ,data : tempSortedCities })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getCountry = getCountry
module.exports.getAllCountry = getAllCountry

