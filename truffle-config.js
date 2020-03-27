require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strong deny meadow artwork grace slice swear gate'; 
let testAccounts = [
"0x8ec43cfdb4d6e46d3e43b523ab16ca616dae51af7d28abaf1f3a8d2342dcbaf5",
"0x711f696b125e1c5d80ed9d5764cee62e05a4b37e3a30ca9fcad3950b86e96342",
"0xea688e64e00df5f5c27bb5830abfd956193ced22748436babfdb9b63888ed54c",
"0xe65e38940149352027b0e9e345d15c74c3a69555425ed34b5158d0f3a66e1a7f",
"0x61399f918da8cdde43bdee63248666cc4384f44f378ae6a46f4bfb87a42cb6c4",
"0x54c0df377e18aceeb014686cd481e73c35f5ac8b31893743f5dcc73c9046cd48",
"0x66f5ebc713f201f568f0060502996656d5b03a158bb08bc3b60d143b1071aa07",
"0x3475d9acfc0d361ffcac807145a69fb6f6fdd811ec885e6ec2e18d7a27f377b6",
"0xc7a855f849d90401502407e3296811e3cce33ea9e69f7508c775c3c55bb079cd",
"0xef180a8634b2bda7f46692d61edd5e4a06565bb73c1c98f2b3b6cdd8b9021d42"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
