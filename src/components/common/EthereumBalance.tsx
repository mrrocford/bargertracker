// EthereumBalance.tsx
import React, { useState } from 'react';
import web3 from './CryptoWeb';
import styled from 'styled-components';


const BalanceStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    margin: 10px 100px;
    height: 550px;
`;


const EthereumBalance: React.FC = () => {
    const [balance, setBalance] = useState<string | null>(null);

    const fetchBalance = async (address: string) => {
        try {
            const balance = await web3.eth.getBalance(address);
            setBalance(web3.utils.fromWei(balance, 'ether')); // перетворити Wei в Ether
        } catch (error) {
            console.error("An error occurred while fetching the balance: ", error);
            setBalance(null); 
        }
    };

    return (
        <BalanceStyled>
        <input type="text" placeholder="Enter address" onChange={e => fetchBalance(e.target.value)} />
            {balance !== null ? <p>Balance: {balance} ETH</p> : <p>Could not fetch balance</p>}
        </BalanceStyled>
    );
};

export default EthereumBalance;
