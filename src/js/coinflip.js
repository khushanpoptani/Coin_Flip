const { sendBitcoin } = require('./transaction');

async function flipCoin() {
    const betAmount = document.getElementById('bet-amount').value;
    const betSide = document.getElementById('bet-side').value;
    const toAddress = document.getElementById('btc-address').value;

    if (!betAmount) {
        alert('Please enter a bet amount.');
        return;
    }

    // Simulate a coin flip
    const randomSide = Math.random() < 0.5 ? 'heads' : 'tails';
    
    if (randomSide === betSide) {
        const privateKeyWIF = prompt("Please enter your private key to authorize the transaction:");

        try {
            // Send double the bet amount to the user's address
            const txHex = await sendBitcoin('yourBitcoinAddress', toAddress, betAmount * 2, privateKeyWIF);
            displayResult(`Congratulations! You won ${betAmount} BTC. Transaction ID: ${txHex}`);
        } catch (error) {
            displayResult('There was an error processing your transaction. Please try again.');
        }
    } else {
        displayResult('Sorry, you lost.');
    }
}
