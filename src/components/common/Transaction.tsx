import React, { useState } from 'react';
import web3 from './CryptoWeb'; 
import styled from 'styled-components';


const TransactionStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    margin: 0px 100px;
    height: 550px;
`;

const InputStyled = styled.input`
    font-family: 'VT323';
    font-size: 15px;
    margin: 0px 0px 10px 0px; 
`
const Button = styled.button`
    font-family: 'VT323';
    font-size: 15px;
    padding: 5px 10px;
    margin-top: 10px;
    margin-right: 5px;
    background-color: #f2f2f2;
    border: 0.2px solid #8A897C;
    border-radius: 4px;
    cursor: pointer;


    &:hover {
        background-color: #8A897C;
    }
    
`;

const EtherTransfer: React.FC = () => {
    const [fromAddress, setFromAddress] = useState<string>('');
    const [privateKey, setPrivateKey] = useState<string>('');
    const [toAddress, setToAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    

    const sendTransaction = async () => {
        try {

        const nonce = await web3.eth.getTransactionCount(fromAddress, 'pending');
        const gasPrice = await web3.eth.getGasPrice();
        const value = web3.utils.toWei(amount, 'ether');

        const tx = {
            nonce: '0x' + nonce.toString(16),
            gasPrice: '0x' + gasPrice.toString(16),
            gasLimit: '0x5208',
            to: toAddress,
            value: '0x' + parseInt(value).toString(16),
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey); // замініть на ваш приватний ключ
        const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);

        console.log(result);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <TransactionStyled>
        <InputStyled type="text" placeholder="From address" onChange={event => setFromAddress(event.target.value)} />
        <InputStyled type="password" placeholder="Private key" onChange={event => setPrivateKey(event.target.value)} />
        <InputStyled type="text" placeholder="To address" onChange={event => setToAddress(event.target.value)} />
        <InputStyled type="text" placeholder="Amount" onChange={event => setAmount(event.target.value)} />
        <Button onClick={sendTransaction}>Send Transaction</Button>
        </TransactionStyled>
    );
};

export default EtherTransfer;
