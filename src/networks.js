module.exports = {
    tachacoin: {
        messagePrefix: '\x15Tachacoin Signed Message:\n',
        bech32: 'tc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x41,
        scriptHash: 0x32,
        wif: 0x80
    },
    tachacoin_testnet: {
        messagePrefix: '\x15Tachacoin Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
