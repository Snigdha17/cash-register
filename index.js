const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const cashGivenArea = document.querySelector("#cash-given-area");
const errorMessage = document.querySelector("#error-message");
const numberOfNotesDisplayArea = document.querySelectorAll(".noOfNotes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function nextButtonOnClickHandler() {
  hideMessage();
  const billAmountValue = Number(billAmount.value);
  if (!Number.isInteger(billAmountValue)) {
    showMessage("Bill Amount should be a number");
  } else if (billAmountValue > 0) {
    cashGivenArea.style.display = "block";
    nextButton.style.display = "none";
  } else {
    showMessage("The bill amount should be greater than 0");
  }
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.floor(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    numberOfNotesDisplayArea[i].innerText = numberOfNotes;
  }
}

function checkButtonOnClickHandler() {
  hideMessage();
  const billAmountValue = Number(billAmount.value);
  const cashGivenValue = Number(cashGiven.value);

  if (!Number.isInteger(cashGivenValue)) {
    showMessage("Cash Given should be a number");
  } else if (cashGivenValue >= billAmountValue) {
    const amountToBeReturned = cashGivenValue - billAmountValue;
    calculateChange(amountToBeReturned);
  } else {
    showMessage(
      "Cash provided should be equal to or greater than the bill amount"
    );
  }
}

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function hideCashGivenInputArea() {
  cashGivenArea.style.display = "none";
}

nextButton.addEventListener("click", nextButtonOnClickHandler);
checkButton.addEventListener("click", checkButtonOnClickHandler);
