function calculateTime(){
    var date= new Date();
    var daynum = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >=12 ? `PM` : `AM`
    var dayNames = ["SUN" , "MON" , "TUE" , "WED" , "THU" , "FRI" , "SAT" ];
    console.log(date);
    
    

    hour = hour >12? hour%12: hour;
    console.log(hour + `hours`);
    console.log(minute + "minute");
    console.log(ampm);   
    console.log(dayNames[daynum]);

    document.getElementById("day").innerText = dayNames[daynum];
    document.getElementById("hour").innerText = hour;
    document.getElementById("ampm").innerHTML = ampm;
    
}

calculateTime();

