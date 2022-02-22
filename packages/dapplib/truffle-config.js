require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name return ranch cluster hunt forget food genius'; 
let testAccounts = [
"0xd8c1f56aca1540e25c56e26c2eb626ebe99372760bbb8c0f98199e7e933734ed",
"0x844452aba07c7f2fb28dfd8c9d1949036c4bcac18f9ca86d829ce02fc52c402e",
"0x85730920c43f77883df8cd0feedaa32035870faa0c20e16a84f5e8cbe2307752",
"0x98309cd0f541cd0a28a4ac3954617ee97fa1a68c4cb7ba7d58af04b270150de5",
"0x81abc19e665666145add8729008aceccf557b407d4ec893867afa6a1997e88a2",
"0x2dbd7183d80ae6cdeb8064d6d455f0d6984c13ad516c95c98667dd3f88efcf4b",
"0x56b285d08320bb2c5a15ecf55c11d9023b36d9036e7e542c4226301f6989d6cd",
"0x3355299e9bc284c846cf7f45d09586557e092b0d91480faf8775e84df023474e",
"0xada6ccaba5a87999230553dd8ce0538152598c9a2c66bd728a8b45aa8fdd360f",
"0xbb11f95fa43d0ec298b143354984d5905cf9c446b06a7a73865b4cb0989776a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

