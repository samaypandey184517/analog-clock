let hr = document.getElementById('hour');// to fatch the hour hand 
let min = document.getElementById('min');// to fatch the min hand
let sec = document.getElementById('sec');// to fatch the second hand

function displayTime(){
    let date = new Date();// yo date jis date ka time batana hai

    
    let hh = date.getHours(); //ak fix date per ak fix hour 
    let mm = date.getMinutes();// ak fix date par ak fix minut
    let ss = date.getSeconds();// ak fix date per ak fix second 

    let hRotation = 30*hh + mm/2;// how many rotation with in the given  hour 
    let mRotation = 6*mm;// how many rotation with in the given minut 
    let sRotation = 6*ss; //in given second 

    hr.style.transform = `rotate(${hRotation}deg)`;// rotation of hour scale
    min.style.transform = `rotate(${mRotation}deg)`;// rotation of  degree scale
    sec.style.transform = `rotate(${sRotation}deg)`;// rotation of sec scale

}

setInterval(displayTime, 1000);
displayTime();

