// Get the trade form and trades list from the DOM
const tradeForm = document.getElementById("tradeForm");
const tradesList = document.getElementById("tradesList");

// Create a function to add a trade to the list
function addTradeToList(trade) {
  // Create a new div element to hold the trade
  const tradeDiv = document.createElement("div");
  tradeDiv.classList.add("trade");

  // Create a new p element for each trade attribute and add it to the div
  const ticker = document.createElement("p");
  ticker.textContent = `Ticker: ${trade.ticker}`;
  tradeDiv.appendChild(ticker);

  const quantity = document.createElement("p");
  quantity.textContent = `Quantity: ${trade.quantity}`;
  tradeDiv.appendChild(quantity);

  const price = document.createElement("p");
  price.textContent = `Price: $${trade.price.toFixed(2)}`;
  tradeDiv.appendChild(price);

  const date = document.createElement("p");
  date.textContent = `Date: ${trade.date}`;
  tradeDiv.appendChild(date);

  // Add the trade div to the trades list
  tradesList.appendChild(tradeDiv);
}

// Add an event listener to the trade form to handle form submissions
tradeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values from the form
  const ticker = event.target.elements.ticker.value;
  const
