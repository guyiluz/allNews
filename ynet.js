const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const fs =require('fs')
let date = require('date-and-time');

nightmare
  .goto('https://www.ynet.co.il')
  .wait(2000)
  .evaluate(() => document.querySelectorAll(".subtitle")[0].innerText)

  .end()
  .then((headline)=>{
    let now = new Date();
   
   const obj={
    site:"ynet",
    date: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
    headline

   }

 fs.writeFile('text.txt',JSON.stringify(obj))


  })
  .catch(error => {
    console.error('Search failed:', error)
  })