function updateCountdown() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(remainingTime % 1000);
  
    document.getElementById('countdown').innerHTML = `${days} : ${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  
    if (remainingTime <= 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = "War never changes";
    }
  }
  
  const targetDate = new Date('April 12, 2024 00:00:00').getTime();
  const countdown = setInterval(updateCountdown, 1);
  
  updateCountdown();
  