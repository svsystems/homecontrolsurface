//json get url
document.getElementById('living-off').addEventListener('click', function() {
    var apiUrl ='https://maker.ifttt.com/trigger/living_off/json/with/key/dym8vgcdIbmEAmduk4UtB7';



    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })         
})



//json get url
document.getElementById('living-on').addEventListener('click', function() {
    var apiUrl ='https://maker.ifttt.com/trigger/living_on/json/with/key/dym8vgcdIbmEAmduk4UtB7';
        
        
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })         
})



//json get url
document.getElementById('bedroom-on').addEventListener('click', function() {
    var apiUrl ='https://maker.ifttt.com/trigger/bedroom_on/json/with/key/dym8vgcdIbmEAmduk4UtB7';
        
        
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })         
})



//json get url
document.getElementById('bedroom-off').addEventListener('click', function() {
    var apiUrl ='https://maker.ifttt.com/trigger/bedroom_off/json/with/key/dym8vgcdIbmEAmduk4UtB7';
        
        
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })         
})



//welcome time get system
function updateCurrentTime() {
        var currentTimeElement = document.getElementById('currentTime');
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();


        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;


        var formattedTime = hours + ":" + minutes + ":" + seconds;


        currentTimeElement.innerHTML = formattedTime;
    }


    setInterval(updateCurrentTime, 1000);

    updateCurrentTime();



//welcome greeting tyme system
function getGreeting() {
    var currentTime = new Date();
    var options = { timeZone: 'Europe/Amsterdam', hour: 'numeric', minute: 'numeric' };
    var timeString = currentTime.toLocaleTimeString('en-US', options);

    var greeting;

    if (currentTime.getHours() < 3) {
        greeting = "Good evening";
    } else if (currentTime.getHours() < 12) {
        greeting = "Good morning";
    } else {
        greeting = "Good afternoon";
    }

    // Update the HTML content
    document.getElementById('greeting').innerHTML = greeting;
}




//changes color when button pressed
function changeColor(buttonType) {
    var button = document.querySelector('.button.' + buttonType);
    button.style.backgroundColor = "white";



    setTimeout(function() {
      button.style.backgroundColor = "black";
    }, 100);
}



//get time when opening
window.onload = getGreeting;
setInterval(getGreeting, 300000);



