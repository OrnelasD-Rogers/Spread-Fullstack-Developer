let currentNumber = document.getElementById("currentNumber");

let count = 0;
const increment = () => {
  count++;
  currentNumber.innerHTML = count;
};

const decrement = () => {
  count--;
  currentNumber.innerHTML = count;
};
