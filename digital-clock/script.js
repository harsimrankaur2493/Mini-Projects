function updateClock() {const time = new Date();
    console.log(time.toLocaleTimeString());
    let ampm = time.getHours()>12? "PM" : "AM";
    let hour =  time.getHours() > 12? time.getHours()-12 : time.getHours();
    console.log(time.getHours());
    let min = time.getMinutes();
    console.log(min);
    let sec = time.getSeconds();
    console.log(sec);
    
    console.log(ampm);

    document.querySelector("#hr").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;
    document.querySelector("#ampm").innerHTML = ampm;}
    
    setInterval(updateClock, 1000)
