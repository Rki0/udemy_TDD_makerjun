const $ = (selector) => document.querySelector(selector);

function App() {
  const handleDigitClick = (e) => {
    if (!e.target.classList.contains("digit")) {
      return;
    }

    const currentTotal = $("#total").innerText;
    const newDigit = e.target.innerText;

    $("#total").innerText =
      currentTotal === "0" ? newDigit : currentTotal + newDigit;
  };

  const handleOperationClick = (e) => {
    if (!e.target.classList.contains("operation")) {
      return;
    }

    const currentTotal = $("#total").innerText;
    const operation = e.target.innerText;

    const lastStr = currentTotal[currentTotal.length - 1];

    if (
      lastStr === "+" ||
      lastStr === "-" ||
      lastStr === "X" ||
      lastStr === "/"
    ) {
      let strArr = currentTotal.split("");
      strArr.pop();
      strArr.push(operation);
      const newCurrentTotal = strArr.join("");

      $("#total").innerText = newCurrentTotal;
      return;
    }

    $("#total").innerText = currentTotal + operation;
  };

  $(".digits").addEventListener("click", handleDigitClick);

  $(".operations").addEventListener("click", handleOperationClick);
}

App();
