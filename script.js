function updateDateTime() {
  const now = new Date();
  
  const currentDateElement = document.getElementById('current-date');
  const countdownMonthElement = document.getElementById('countdown-month');
  const countdownYearElement = document.getElementById('countdown-year');
  const quoteElement = document.getElementById('quote');

  // Update current date and time
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  currentDateElement.textContent = now.toLocaleDateString('en-US', options);

  // Calculate countdown for the end of the month
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysLeftInMonth = Math.floor((endOfMonth - now) / (1000 * 60 * 60 * 24));
  countdownMonthElement.textContent = `${daysLeftInMonth} days left in this month`;

  // Calculate countdown for the end of the year
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const daysLeftInYear = Math.floor((endOfYear - now) / (1000 * 60 * 60 * 24));
  countdownYearElement.textContent = `${daysLeftInYear} days left in this year`;

  // Array of motivational quotes
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    // Add more quotes here
  ];

  // Display a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
}

updateDateTime();
setInterval(updateDateTime, 1000);
