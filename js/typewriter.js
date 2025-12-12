      const textArray = ["IT Enthusiast", "Aspiring Full Stack Developer"];

      const minTypeSpeed = 40;
      const maxTypeSpeed = 120;
      const minEraseSpeed = 30;
      const maxEraseSpeed = 90;
      const delayBetweenWords = 1200;
      const startDelay = 800;

      let textIndex = 0;
      let charIndex = 0;

      const typewriter = document.getElementById("typewriter");

      function randomSpeed(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function type() {
        if (charIndex < textArray[textIndex].length) {
          typewriter.textContent += textArray[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, randomSpeed(minTypeSpeed, maxTypeSpeed));
        } else {
          setTimeout(erase, delayBetweenWords);
        }
      }

      function erase() {
        if (charIndex > 0) {
          typewriter.textContent = textArray[textIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(erase, randomSpeed(minEraseSpeed, maxEraseSpeed));
        } else {
          textIndex = (textIndex + 1) % textArray.length;
          setTimeout(type, randomSpeed(minTypeSpeed, maxTypeSpeed));
        }
      }

      setTimeout(type, startDelay);