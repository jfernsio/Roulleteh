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

  numdis.addEventListener("click", og);

  evedis.addEventListener("click", enable);
  odddids.addEventListener("click", enable);
  reddis.addEventListener("click", enable);
  blackdis.addEventListener("click", enable);

  rowdis.addEventListener("click", disable);
  columndis.addEventListener("click", disable);
});
