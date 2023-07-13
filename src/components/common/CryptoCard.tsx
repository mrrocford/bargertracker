import React from 'react';
import { CryptoData } from './CryptoTracker';
import styled from "styled-components";


const CryptoCardWrapper = styled.div`
`;

const CryptoCardContainer = styled.div`
`;
const TitleCard = styled.h2`
    
`;

const Button = styled.button`
    font-family: 'VT323';
    font-size: 20px;
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



interface CryptoCardProps {
    cryptoData: CryptoData | null;
    selectedCryptoKey: string | null;
    setSelectedCryptoKey: (key: string | null) => void;
}


const CryptoCard: React.FC<CryptoCardProps> = ({ cryptoData, selectedCryptoKey, setSelectedCryptoKey }) => {
    const handleCloseCryptoCard = () => {
        setSelectedCryptoKey(null);
        };

    if (selectedCryptoKey && cryptoData && cryptoData[selectedCryptoKey]) {
        const { PRICE, CHANGEPCT24HOUR, VOLUME24HOURTO } = cryptoData[selectedCryptoKey].USD;

        return (
        <CryptoCardWrapper>
            <CryptoCardContainer>
                <TitleCard>{selectedCryptoKey}</TitleCard>
                <p>Price: {PRICE}$</p>
                <p>24h Change: {CHANGEPCT24HOUR}%</p>
                <p>24h Volume: {VOLUME24HOURTO}</p>
                <Button onClick={handleCloseCryptoCard}>Close</Button>
            </CryptoCardContainer>
        </CryptoCardWrapper>
        );
    }

    return null;
};

export default CryptoCard;
