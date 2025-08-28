// Initial counters
let coins = 100;
let heartCount = 0;
let copyCount = 0;

// Update counters in Navbar
const updateCoins = () => {
  document.getElementById("coin-count").innerText = coins;
};
const updateHearts = () => {
  document.getElementById("heart-count").innerText = heartCount;
};

// HEART BUTTON FUNCTIONALITY
document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    updateHearts();

    // Optional: toggle color effect
    btn.classList.toggle("text-red-500");
    btn.classList.toggle("bg-red-50");
  });
});

// COPY BUTTON FUNCTIONALITY
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number);
    copyCount++;
    alert(`Copied ${number} to clipboard! Total copies: ${copyCount}`);
  });
});

// CALL BUTTON FUNCTIONALITY
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make the call.");
      return;
    }

    coins -= 20;
    updateCoins();

    const serviceName = btn.dataset.name;
    const number = btn.dataset.number;
    alert(`Calling ${serviceName}: ${number}`);

    // Add to call history
    const historyList = document.getElementById("call-history");
    const time = new Date().toLocaleString();
    const li = document.createElement("li");
    li.innerText = `${serviceName} - ${number} at ${time}`;
    historyList.appendChild(li);
  });
});

// CLEAR CALL HISTORY
document.getElementById("clear-history-btn").addEventListener("click", () => {
  document.getElementById("call-history").innerHTML = "";
});
