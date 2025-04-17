let currentTime = new Date();
let currentHour = currentTime.getHours();



if (currentHour < 12){
    document.body.innerHTML =("Good Morning") 
}
else{ document.body.innerHTML = ("Good Afternoon")}