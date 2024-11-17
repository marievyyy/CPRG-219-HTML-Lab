// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {

   // ----- FOOTER
   // Get the current date
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   document.getElementById("copyright").innerHTML = `Copyright ${currentYear} Ivy Porras`;
   console.log("Oh! Hello there! I'm Ivy Porras");
   console.log("Today's date is:", currentDate.toString());

   // ----- GREETING 
   const currentHour = new Date().getHours();
   const greetingElement = document.getElementById("greeting");

   if (greetingElement) {
      if (currentHour < 12) {
         greetingElement.textContent = "Good morning!";
         greetingElement.classList.add("morning");
      } else if (currentHour < 17) {
         greetingElement.textContent = "Good afternoon!";
         greetingElement.classList.add("afternoon");
      } else {
         greetingElement.textContent = "Good evening!";
         greetingElement.classList.add("evening");
      }
   }

});


