document.addEventListener("DOMContentLoaded", function () {

  const betTypeSelect = document.getElementById("bet-type");
  const numdis = document.querySelector("#number");
  const evedis = document.querySelector("#even");
  const odddids = document.querySelector("#odd");
  const reddis = document.querySelector("#red");
  const blackdis = document.querySelector("#black");
  const rowdis = document.querySelector("#row");
  const columndis = document.querySelector("#column");

  const bet1 = betTypeSelect.value;
  if (bet1 === "odd" || bet1 === "even" || bet1 === "red" || bet1 === "black") {
    document.getElementById("bet-number").disabled = true;
  }

  const og = () => {
    document.getElementById("bet-number").disabled = false;
    document.getElementById("result").textContent = " ";
  };

  const disable = () => {
    document.getElementById("bet-number").disabled = false;
    document.getElementById("result").textContent =
      "Row/Col bets under development";
  };

  const enable = () => {
    document.getElementById("bet-number").disabled = true;
    document.getElementById("result").textContent = " ";
  };

  numdis.addEventListener("change", og);

  evedis.addEventListener("change", enable);
  odddids.addEventListener("change", enable);
  reddis.addEventListener("change", enable);
  blackdis.addEventListener("change", enable);

  rowdis.addEventListener("change", disable);
  columndis.addEventListener("change", disable);
});
