const { createTransaction } = require('../bitcoin/transaction');

function testCreateTransaction() {
    const fromAddress = 'YourTestFromAddress';
    const toAddress = '18J7S4qkQax1bvE6eFyXKdFPiFohWMvYzw';  // Your Bitcoin address
    const amount = 100000; // 100,000 satoshis (0.001 BTC)
    const privateKey = 'YourPrivateKeyWIF';

    try {
        const txHex = createTransaction(fromAddress, toAddress, amount, privateKey);
        console.log('Transaction Hex:', txHex);
    } catch (error) {
        console.error('Transaction creation failed:', error);
    }
}

testCreateTransaction();
