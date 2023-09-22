setInterval(function(){
    let time= new Date();
    
    let hour= time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let weekday= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let month= time.getMonth();
    let date=time.getDate();


   let day= weekday[time.getDay()];

    document.querySelector('.weekday').innerHTML= `${day}`;
    document.querySelector('.month').innerHTML=`${month+1}`;
    document.querySelector('.date').innerHTML=`${date}`;
    document.querySelector('.hour').innerHTML= `${hour}`;
    document.querySelector('.minute').innerHTML= `:${minute}`;
    document.querySelector('.second').innerHTML= `:${second}`;
    
    if(month<10){
        document.querySelector('.month').innerHTML=`0${month+1}`;
    }
    if(date<10){
        document.querySelector('.date').innerHTML=`0${date}`;

    }
    if(second>=0 && second<=9){
        document.querySelector('.second').innerHTML = `:0${second}`;
    }
    if(minute>=0 && minute<=9){
        document.querySelector('.minute').innerHTML = `:0${minute}`;
    }
    if(hour>=0 && hour<=9){
        document.querySelector('.hour').innerHTML = `0${hour}`;
    }
    if(hour>=12 && hour<=24){
        document.querySelector('.ampm').innerHTML='PM';
       
    }
    else{
        document.querySelector('.ampm').innerHTML='AM';
    }
    if(hour>=13 && hour<=21){
        document.querySelector('.hour').innerHTML= `0${hour-12}`;
    }
    else if(hour >=22 && hour<=24){
        document.querySelector('.hour').innerHTML= `${hour-12}`;
    }


},1000);


