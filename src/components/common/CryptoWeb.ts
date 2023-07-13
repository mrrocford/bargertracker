

import Web3 from 'web3';

const API_KEY = 'e6d6a8fe18b64e1d94f8bbb8ab6b91bb';

const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/${API_KEY}`));

export default web3;
