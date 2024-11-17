// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {

   // ----- FOOTER
   // Get the current date
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   document.getElementById("copyright").innerHTML = `Copyright ${currentYear} Ivy Porras`;
   console.log("Oh! Hello there! I'm Ivy Porras");
   console.log("Today's date is:", currentDate.toString());

});


