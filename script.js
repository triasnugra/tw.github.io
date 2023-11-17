function updateDateTime() {
  const now = new Date();
  
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');
  const countdownElement = document.getElementById('countdown');
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
  
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
  
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const daysLeft = Math.floor((endOfYear - now) / (1000 * 60 * 60 * 24));
  countdownElement.textContent = `${daysLeft} days left in the year`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
