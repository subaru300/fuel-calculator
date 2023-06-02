let inputs = document.querySelectorAll('input[type="number"]');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function () {
    if (this.value.length > this.maxLength) {
      this.value = this.value.slice(0, this.maxLength);
    }
  });
}

function calculateCost() {
  let distanceInput = document.getElementById('distanceId');
  let consumptionInput = document.getElementById('consumptionId');
  let costInput = document.getElementById('costId');
  let quantityInput = document.getElementById('quantityId');
  let passedInput = document.getElementById('passedId');
  distance = distanceInput.value;
  consumption = consumptionInput.value;
  cost = costInput.value;
  quantity = quantityInput.value;
  passed = passedInput.value;
  let costTravel = consumption * cost * (distance / 100);
  let liters = (consumption * distance) / 100;
  let averageСonsumption = (quantity * 100) / passed;
  document.getElementById('screen__result').innerText = costTravel.toFixed(1);
  document.getElementById('screen__result__liters').innerText =
    liters.toFixed(1);

  if (!isNaN(averageСonsumption)) {
    document.getElementById('screen__result__сonsumption').innerText =
      averageСonsumption.toFixed(1);
  } else {
    document.getElementById('screen__result__сonsumption').innerText = '0';
  }
}
