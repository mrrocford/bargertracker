import Web3 from 'web3';

const apiKey = process.env.REACT_APP_API_KEY; 

const API_KEY = apiKey;

const web3 = new Web3(new Web3.providers.HttpProvider(`https://goerli.infura.io/v3/${API_KEY}`));

export default web3;
