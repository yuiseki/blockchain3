"use strict";
// https://medium.com/the-capital/building-a-simple-blockchain-in-30-lines-of-typescript-9bc2963223fc
// https://github.com/soyjavi/vanilla-blockchain
Object.defineProperty(exports, "__esModule", { value: true });
exports.mineNewBlock = void 0;
const crypto_js_1 = require("crypto-js");
let blockchain3 = [];
// The genesis block
// https://twitter.com/OnePeopei/status/1549726868081094656
blockchain3.push({
    data: "ブロックチェーンで、OSは、作れますよ。",
    timestamp: 1658351040,
    nonce: 0,
    hash: "7b160e1f030b8929bf48b0a2774942a23ab0e4a7e428da499c058e01924d6960",
    previousHash: "",
});
const getBlockHash = (block) => {
    const blockValue = block.previousHash +
        block.timestamp +
        JSON.stringify(block.data) +
        block.nonce;
    return (0, crypto_js_1.SHA256)(blockValue).toString();
};
const mineNewBlock = (data, difficulty = 1) => {
    const previousBlock = blockchain3[blockchain3.length - 1];
    const previousHash = getBlockHash(previousBlock);
    let nonce = 0;
    let timestamp = new Date().getTime();
    while (true) {
        timestamp = new Date().getTime();
        const block = {
            data,
            timestamp,
            nonce,
            previousHash,
        };
        const blockHash = getBlockHash(block);
        if (blockHash.startsWith(Array(difficulty + 1).join("0"))) {
            block.hash = blockHash;
            blockchain3.push(block);
            break;
        }
        nonce += 1;
    }
    return blockchain3;
};
exports.mineNewBlock = mineNewBlock;
//# sourceMappingURL=index.js.map