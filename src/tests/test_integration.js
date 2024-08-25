async function testCoinFlipIntegration() {
    await connectWallet();
    const result = await flipCoin();
    console.log(result);
}

testCoinFlipIntegration();
