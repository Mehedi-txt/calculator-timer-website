 function appendValue(value) {
      document.getElementById('calcInput').value += value;
    }

    function clearDisplay() {
      document.getElementById('calcInput').value = '';
    }

    function calculate() {
      const value = document.getElementById('calcInput').value;
      try {
        document.getElementById('calcInput').value = eval(value);
      } catch {
        document.getElementById('calcInput').value = 'Error';
      }
    }

    let countdown;
    let timeLeft = 0;

    function startTimer() {
      clearInterval(countdown);
      timeLeft = parseInt(document.getElementById('seconds').value) || 0;
      updateDisplay();

      countdown = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          clearInterval(countdown);
          alert('Time up!');
        }
      }, 1000);
    }

    function resetTimer() {
      clearInterval(countdown);
      timeLeft = 0;
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById('timerDisplay').innerText = timeLeft;
    }