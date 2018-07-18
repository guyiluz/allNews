const rp = require('request-promise');
const cheerio = require('cheerio')
const fs =require('fs')
let date = require('date-and-time');


module.exports= function fetchHadeline (site,url,cl) {
  let json= fs.readFileSync(`./hadlines.json`,'utf8')
   json =JSON.parse(json)
  const headlinfromFile =json[site]


function getHadline($,headlinfromFile) {
  console.log(headlinfromFile)
  const healdeLine=cl($)
  if(headlinfromFile.healdeLine==healdeLine){
    return false
  }else{
    let now = new Date();
    const obj={
      site:site,
      date: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
      healdeLine
  
     }
  json[site]=obj
  
    fs.writeFile(`./hadlines.json`,JSON.stringify(json))
  }
  
    
}


const options = {
  uri: url,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    getHadline($,headlinfromFile)
  
  })
  .catch((err) => {
    console.log(err);
  });



}