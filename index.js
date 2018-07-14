const fethcHadline =require("./fetchHadeline")
fethcHadline("haaretz","https://www.haaretz.co.il/",($)=>{ return $(".h-db").find("h1").text()})
