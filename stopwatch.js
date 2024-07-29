var start=document.getElementById("str")
var restart=document.getElementById("re")
var stp=document.getElementById("stp")
  var mins=document.getElementById("mins")
  var secs=document.getElementById("sec")
  var milisec=document.getElementById("msec")
var int
  var seconds=00
  var miliseconds=00
  var minitues=00
  start.addEventListener("click",()=>{
    int=setInterval(startbtn,19)
  })
  stp.addEventListener("click",()=>{
    clearInterval(int)
  })

  restart.addEventListener("click",()=>{
    clearInterval(int)
    minitues="00"
    seconds="00"
    miliseconds="00"
    mins.innerHTML=minitues
    secs.innerHTML=seconds
    milisec.innerHTML=miliseconds
  })

  function startbtn()
  {
    miliseconds++
    if(miliseconds<=9)
    {
        milisec.innerHTML='0'+ miliseconds 
    }
    if(miliseconds>9)
    {
        milisec.innerHTML=miliseconds
    }
    if(miliseconds>=60)
    {
        seconds++
        if(seconds<=9)
         {
            secs.innerHTML='0'+ seconds
            miliseconds=00
         }
        if(seconds>9)
         {
             secs.innerHTML=seconds
             miliseconds=00
         }
         if(seconds>=60)
           {
             minitues++
             if(minitues<=9)
             {
                mins.innerHTML='0'+ minitues
                seconds=00
             }
             if(minitues>9)
            {
               mins.innerHTML=minities
               seconds=00
            }
         }
    }
  }

