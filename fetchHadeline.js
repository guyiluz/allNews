const rp = require('request-promise');
const cheerio = require('cheerio')
const fs =require('fs')
let date = require('date-and-time');


module.exports= function fetchHadeline (site,url,cl) {
  let json= fs.readFileSync(`./${site}.json`,'utf8')
   json =JSON.parse(json)
  const headlinfromFile =json.healdeLine

function getHadline($,headlinfromFile) {
  console.log(headlinfromFile)
  const healdeLine=cl($)
  if(headlinfromFile==healdeLine){
    return false
  }else{
    let now = new Date();
    const obj={
      site:site,
      date: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
      healdeLine
  
     }
  
  
    fs.writeFile(`${site}.json`,JSON.stringify(obj))
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