document
  .getElementById("transaction-form")
  .addEventListener("submit", addTransaction);

let totalIncome = 0;
let totalExpense = 0;

function addTransaction(e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;
  const transactionList = document.getElementById("transaction-list");

  if (type === "Expense" && totalExpense + amount > totalIncome) {
    alert("Your expenses are exceeding, please review it!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add(type);
  listItem.innerHTML = `${category}: <span>Rs ${amount.toFixed(2)}</span>`;
  transactionList.appendChild(listItem);

  if (type === "Income") {
    totalIncome += amount;
  } else {
    totalExpense += amount;
  }

  updateSummary();
}

function updateSummary() {
  const totalIncomeDisplay = document.getElementById("total-income");
  const totalExpenseDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");

  const balance = totalIncome - totalExpense;

  totalIncomeDisplay.textContent = `Rs ${totalIncome.toFixed(2)}`;
  totalExpenseDisplay.textContent = `Rs ${totalExpense.toFixed(2)}`;
  balanceDisplay.textContent = `Rs ${balance.toFixed(2)}`;
}
