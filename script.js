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

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      alert(`Number ${number} copied!`);
    });

    // Update counter
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
});
 


// Function to add call history
function addToHistory(serviceName, number) {
  const historyContent = document.getElementById('historyContent');

  // If empty-state have then remove
  const emptyState = historyContent.querySelector(".empty-state");
  if (emptyState) {
    historyContent.removeChild(emptyState);
  }


  // Create new entry
  const time = new Date().toLocaleString();
  const entry = document.createElement('div');
  entry.className = "p-3 border-b border-gray-200";
  entry.innerHTML = `
    <p class="font-semibold text-gray-900">${serviceName}</p>
    <p class="text-sm text-gray-600">${number}</p>
    <p class="text-xs text-gray-400">${time}</p>
  `;
  historyContent.appendChild(entry);
}

// Call Button functionality
document.querySelectorAll('.call-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (coins < 20) {
      alert("Not enough coins to make the call!");
      return;
    }

    coins -= 20;
    updateCoins();

    const serviceName = btn.dataset.name;
    const number = btn.dataset.number;
    alert(`Calling ${serviceName}: ${number}`);

    // Add to history panel
    addToHistory(serviceName, number);
  });
});

// CLEAR HISTORY BUTTON FUNCTIONALITY
document.getElementById('clear-history-btn').addEventListener('click', () => {
  const historyContent = document.getElementById('historyContent');
  historyContent.innerHTML = `
    <div
      class="empty-state flex flex-col items-center justify-center text-center py-12 text-gray-500"
    >
      <i class="fas fa-phone-slash text-4xl mb-4 opacity-50"></i>
      <p class="text-base sm:text-2xl">No call history yet</p>
      <p class="text-xs sm:text-sm mt-2">
        Your emergency calls will appear here
      </p>
    </div>
  `;
});


