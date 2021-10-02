
const calcGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;

// DOM manipulation: seleting elements / handling events
document.querySelector('.investment__btn').addEventListener('click', () => {
  // 1. Select and read data from the UI
  const btcUsdBought = document.querySelector('.price__input--bought').value;
  const btcUsdNow = document.querySelector('.price__input--now').value;
  const btc = document.querySelector('.investment__btc').value;
    
  // 2. Calculate the profits
  const invested = btc * btcUsdBought;
  const current = btc * btcUsdNow;
  const profit = current - invested;
  const growth = calcGrowth(invested, current);
  
  // 3. Write the result to the UI
  let message = "";
  const resultField = document.querySelector('.result');
  if (profit > 0) {
    message = `Great! You made a profit of $${profit} (${growth}%).`;
    resultField.style.color = 'green';
  } else if (profit < 0) {
    message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
    resultField.style.color = 'red';
  } else {
    message = "You're breaking even!";
  }
  
  resultField.textContent = message;
  
});