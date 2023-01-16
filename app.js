const pageviews = document.getElementById("pageviews");
const priceText = document.getElementById("price");
const period = document.getElementById("period");
const rangeInput = document.getElementById("rangeInput");
const checkbox = document.querySelector("input[type=checkbox]");
const price = document.querySelector('input[type="range"]');
let isyearlyBilling = false;

checkbox.addEventListener("input", clickToggleButton);
rangeInput.addEventListener("input", priceRange);

function clickToggleButton() {
  let priceValue = price.value;

  if (checkbox.checked) {
    isyearlyBilling = true;
    period.innerHTML = "/year";
    priceValue = priceValue * 6.75;
  } else {
    isyearlyBilling = false;
    period.innerHTML = "/month";
  }

  priceText.innerHTML = ` $${priceValue}.00`;
}

function priceRange() {
  let priceValue = price.value;
  priceText.innerHTML = ` $${priceValue}.00`;

  if (isyearlyBilling) {
    yearlyPriceValue(priceValue);
  }
  monthlyPriceValue(priceValue);

  fillLower();
}

function monthlyPriceValue(priceValue) {
  switch (priceValue) {
    case "8":
      pageviews.innerHTML = "10K";
      break;
    case "12":
      pageviews.innerHTML = "50K";
      break;
    case "16":
      pageviews.innerHTML = "100K";
      break;
    case "20":
      pageviews.innerHTML = "200K";
      break;
    case "24":
      pageviews.innerHTML = "500K";
      break;
  }
}

function yearlyPriceValue(priceValue) {
  priceValue = priceValue * 6.75;
  priceText.innerHTML = ` $${priceValue}.00`;
}

function fillLower() {
  let value = ((price.value - price.min) / (price.max - price.min)) * 100;

  price.style.background =
    "linear-gradient(to right, var(--Soft-Cyan) 0%, var(--Soft-Cyan) " +
    value +
    "%, var(--Light-Grayish) " +
    value +
    "%, var(--Light-Grayish)100%)";
}
