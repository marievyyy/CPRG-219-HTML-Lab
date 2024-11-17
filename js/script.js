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

   // ----- BTN ALERT / HOVER
   const alertButton = document.getElementById("btn-alert");

   if (alertButton) {
      const triviaFacts = [
         "🌍 Did You Know?\nAntarctica is the only continent without any native species of ants. So, if you hate ants, it's the perfect place for you!",
         "🐌 Fun Fact:\nSome species of snails can sleep for up to three years! Guess they really know how to take a nap.",
         "🐘 Fun Fact:\nElephants are the only animals that can't jump. But they make up for it with their impressive memory!",
         "🍫 Sweet Trivia:\nChocolate was once used as currency by the Aztecs. Imagine paying for your groceries with a chocolate bar!",
         "🧠 Brainy Fact:\nYour brain generates enough electricity to power a light bulb. 💡 So, you're literally full of bright ideas!",
         "🐨 Fun Fact:\nKoalas sleep for up to 22 hours a day. They must be living the dream life!",
         "🍕 Did You Know?\nThe longest pizza ever made was over 1.2 miles long! That's a pizza party for the entire world!",
         "💡 Invention Fact:\nThe first alarm clock could only ring at 4 a.m. Not the best for a snooze button lover!",
         "🍎 Did You Know?\nApples float in water because they are 25% air! So, you could go bobbing for apples, and they’ll stay afloat!",
         "🐙 Strange But True:\nOctopuses have three hearts, and two of them stop beating when they swim.",
      ];

      const originalText = alertButton.innerText;
      alertButton.onmouseover = function () {
         alertButton.innerText = "Still curious?";
      };

      alertButton.onmouseout = function () {
         alertButton.innerText = originalText;
      };

      alertButton.addEventListener("click", function () {
         const randomFact = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];
         alert(randomFact);
      });
   }

});


