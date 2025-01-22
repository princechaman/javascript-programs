function countdownTimer(duration, onTick, onComplete) {
    let remainingTime = duration;
  
    const timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            onTick(remainingTime);
            remainingTime--;
        } else {
            clearInterval(timerInterval);
            onComplete();
        }
    }, 1000);
  }
  const durationInSeconds = 10;
  
  countdownTimer(
    durationInSeconds,
    (timeLeft) => {
        console.log(`Time left: ${timeLeft} seconds`);
    },
    () => {
        console.log("Countdown complete!");
    }
  );
  