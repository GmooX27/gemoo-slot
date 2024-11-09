const betSelect = document.getElementById('bet');
const spinButton = document.getElementById('spin');
const balanceText = document.getElementById('balance');

let balance = 100000;
let bet = 1000;

betSelect.addEventListener('change', (e) => {
    bet = parseInt(e.target.value);
});

spinButton.addEventListener('click', () => {
    if (balance >= bet) {
        balance -= bet;
        updateBalance();
        spinReels();
    } else {
        alert("Saldo tidak cukup.");
    }
});

function updateBalance() {
    balanceText.textContent = `Saldo: Rp ${balance.toLocaleString()}`;
}

function spinReels() {
    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓', '🍍', '🍉', '🍌', '🍓'];
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += symbols[Math.floor(Math.random() * symbols.length)] + ' ';
        }
        reel.innerHTML = `<div>${result}</div>`;
    });

    // Simulasi menang
    setTimeout(() => {
        const winAmount = Math.floor(Math.random() * 5) + 1; // Simulasi kemenangan
        const win = bet * winAmount;
        balance += win;
        updateBalance();
        alert(`Anda menang Rp ${win.toLocaleString()}!`);
    }, 1500);
}
