const fethcHadline =require("./fetchHadeline")
const fs =require('fs')
setInterval(() => {
  fethcHadline("haaretz","https://www.haaretz.co.il/",($)=>{ return $(".h-db").find("h1").text()})
  fethcHadline("ynet","https://www.ynet.co.il",($)=>{ return $(".subtitle").text()})

}, 5000)


