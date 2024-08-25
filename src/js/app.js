document.getElementById('connect-wallet').addEventListener('click', connectWallet);
document.getElementById('flip-coin').addEventListener('click', flipCoin);

function updateUIForConnectedWallet(address) {
    document.getElementById('wallet-info').innerText = `Connected Wallet: ${address}`;
    document.getElementById('connect-wallet').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
    document.getElementById('flip-coin').addEventListener('click', flipCoin);
});

document.addEventListener('DOMContentLoaded', () => {
    const flipButton = document.getElementById('flip-coin');
    const instructionsButton = document.getElementById('instructions-button');
    const closeModalButton = document.getElementById('close-modal');
    const modal = document.getElementById('instructions-modal');
    
    if (flipButton) {
        flipButton.addEventListener('click', flipCoin);
    }

    if (instructionsButton) {
        instructionsButton.addEventListener('click', () => {
            modal.classList.add('modal-active');
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.classList.remove('modal-active');
        });
    }
});

function displayResult(message) {
    const result = document.getElementById('result');
    result.textContent = message;
    result.style.opacity = 0; // Reset opacity to trigger animation
    result.classList.remove('popIn'); // Reset the animation class
    void result.offsetWidth; // Trigger reflow to restart animation
    result.classList.add('popIn');
}
