const { Wallet } = require('ethers');
const fs = require('fs');
const { Parser } = require('json2csv');

const wallets = [];

for (let i = 0; i < 1000; i++) {
    const wallet = Wallet.createRandom();
    wallets.push({
        address: wallet.address,
        mnemonic: wallet.mnemonic.phrase,
        privateKey: wallet.privateKey
    });
}

const fields = ['address', 'mnemonic', 'privateKey'];
const json2csvParser = new Parser({ fields });
const csvData = json2csvParser.parse(wallets);

fs.writeFileSync('wallet.csv', csvData);
