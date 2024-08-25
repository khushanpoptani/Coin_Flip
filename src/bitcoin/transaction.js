const bitcoin = require('bitcoinjs-lib');
const network = bitcoin.networks.testnet; // or bitcoin.networks.bitcoin for mainnet

async function sendBitcoin(fromAddress, toAddress, amount, privateKeyWIF) {
    // Create keypair
    const keyPair = bitcoin.ECPair.fromWIF(privateKeyWIF, network);

    // Create transaction builder
    const txb = new bitcoin.TransactionBuilder(network);

    // Add UTXOs as inputs (you would get these from a UTXO API)
    txb.addInput('utxo_transaction_id', 0); // Replace with actual UTXO info

    // Add the output (where the BTC is going)
    txb.addOutput(toAddress, amount);

    // Sign the transaction with the keyPair
    txb.sign(0, keyPair);

    // Build the transaction
    const tx = txb.build().toHex();

    // Broadcast the transaction (you would use a Bitcoin API to do this)
    return tx;
}

module.exports = { sendBitcoin };
