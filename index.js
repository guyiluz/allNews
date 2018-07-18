const fethcHadline =require("./fetchHadeline")
const fs =require('fs')
setInterval(() => {
  fethcHadline("haaretz","https://www.haaretz.co.il/",($)=>{ return $(".h-db").find("h1").text()})
  fethcHadline("ynet","https://www.ynet.co.il",($)=>{ return $(".subtitle").text()})
  fethcHadline("walla","https://www.walla.co.il/",($)=>{ return $(".hp-main-article span")[1].children[0].data})






 
}, 5000)


