async function connectWallet() {
    const btcAddressInput = document.getElementById('btc-address');
    const walletInfo = document.getElementById('wallet-info');
    const gameSection = document.getElementById('game');

    const address = btcAddressInput.value.trim();

    if (!address) {
        alert('Please enter a valid Bitcoin address.');
        return;
    }

    // Update the UI with the user's Bitcoin address
    walletInfo.innerText = `Connected Wallet: ${address}`;
    walletInfo.style.display = 'block';

    // Show the game section
    gameSection.style.display = 'block';

    // Hide the connect wallet input and button
    btcAddressInput.style.display = 'none';
    document.getElementById('connect-wallet').style.display = 'none';
}
