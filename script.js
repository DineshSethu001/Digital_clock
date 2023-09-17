function currentTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let session="AM"

    if (hh==0) hh=12;
    if (hh >12) 
    {   hh=hh-12 
        session="PM"
    }
    hh=(hh<10) ? "0"+hh:hh
    ss=(ss<10) ? "0"+ss:ss
    mm=(mm<10) ? "0"+mm:mm
    


    let time=hh+"h:"+mm+"m:"+ss+"s"+" "+session
    
    document.getElementById("clockDisplay").innerText=time
    setTimeout(()=>{
            currentTime()
    },1000)


}
currentTime()

function anotherFormat(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let session="AM"

    
    if (hh >12) 
    {  
        session="PM"
    }
    hh=(hh<10) ? "0"+hh:hh
    ss=(ss<10) ? "0"+ss:ss
    mm=(mm<10) ? "0"+mm:mm
    


    let time=hh+"h:"+mm+"m:"+ss+"s"+" "+session
    
    document.getElementById("24hFormat").innerText=time
    setTimeout(()=>{
            anotherFormat()
    },1000)


}
anotherFormat()