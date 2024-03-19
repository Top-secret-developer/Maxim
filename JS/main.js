
                                                                                                                                                                                     

    var countdownDate = new Date("march 26 2024 00:00:00").getTime();

    // Update the countdown every second
    var countdownInterval = setInterval(() => {
      var now = new Date().getTime();
      var distance = countdownDate - now;

      // Calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);                                              




const menuContainer = document.getElementById("nav__menu");

const openMenu = () => {

    if(menuContainer.classList.contains("nav_open")){
        menuContainer.classList.remove("nav_open");
    }else{
        menuContainer.classList.add("nav_open");
    }
}



 var container = document.getElementById('popup')

 function openPopup(){
  container.classList.add('open-popup')
 }

 function closePopup(){
  container.classList.remove('open-popup')
 }