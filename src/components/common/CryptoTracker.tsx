    import { useState } from 'react';
    import CryptoWebSocket from './CryptoWebSocket';
    import { CryptoData } from './CryptoData';
    import styled from 'styled-components';
    import Loader from './Loader';
    import CryptoCard from './CryptoCard';
    import localStorageService from './LocalStorageService'; 



    const TableWrapper = styled.div`
        margin-top: 20px;
        border: 2px #1a1818 solid;
        font-size: 20px;

        @media (max-width: 600px) {
            margin-top: 10px;
            font-size: 16px;
        }
        @media (max-width: 390px) {
            font-size: 14px;
            margin: 10px 0px 0 15px;

        }
    `;

    const StyledTable = styled.table`
        width: 100%;
        border-collapse: collapse;

        @media (max-width: 390px) {
            font-size: 0.8em;
        }
    `;

    const TableHeader = styled.th`
        background-color: #BDBBB0;
        padding: 10px;
        text-align: center;

        @media (max-width: 390px) {
            padding: 5px;
        }
    `;

    const TableRow = styled.tr`
        &:nth-child(even) {
            background-color: #BDBBB0;
        }
    `;
    const TableCell = styled.td`
        text-align: center;
        padding: 12px;
        border-bottom: 1px solid #ddd;

        @media (max-width: 390px) {
            padding: 1px;
        }
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
        @media (max-width: 600px) {
            font-size: 16px;
            padding: 3px 8px;
        }
        @media (max-width: 390px) {
            font-size: 14px;
            padding: 3px 6px;
            margin: 3px 0 2px 0;
        }
        
    `;



const CryptoTracker: React.FC = () => {

        const [cryptoData, setCryptoData] = useState<CryptoData>({});
        const [selectedCryptoKey, setSelectedCryptoKey] = useState<string | null>(null);
        const [favorites, setFavorites] = useState<Array<any>>(() => {
            const initialFavorites = localStorageService.getItem('favorites');
            return Array.isArray(initialFavorites) ? initialFavorites : [];
        });


        const handleCryptoData = (data: CryptoData) => {
            setCryptoData(data);
        };

    

        const handleCryptoSelection = (cryptoKey: string) => {
            setSelectedCryptoKey(cryptoKey);
        };

        const addToFavorites = (cryptoKey: string) => {
            const crypto = {
                id: cryptoKey,
                name: cryptoKey,
                price: cryptoData?.[cryptoKey]?.USD?.PRICE || '',
            };
            const currentFavorites = localStorageService.getItem('favorites');
            if (Array.isArray(currentFavorites) && !currentFavorites.some((favorite: { id: string }) => favorite.id === crypto.id)) {
                const updatedFavorites = [...currentFavorites, crypto];
                setFavorites(updatedFavorites);
                localStorageService.setItem('favorites', updatedFavorites); // Зберігайте в localStorageService, а не localStorage
            }
        };

        const removeFromFavorites = (cryptoKey: string) => {
            const currentFavorites = localStorageService.getItem('favorites');
            if (Array.isArray(currentFavorites)) {
                const updatedFavorites = currentFavorites.filter((favorite: { id: string }) => favorite.id !== cryptoKey);
                setFavorites(updatedFavorites);
                localStorageService.setItem('favorites', updatedFavorites); // Зберігайте в localStorageService, а не localStorage
            }
        };
        const renderCryptoData = () => {
            if (!cryptoData) {
                return <Loader />;
            }
            if (Object.keys(cryptoData).length === 0) {
                return <p>No crypto data available.</p>;
            }

            return (
                
            <TableWrapper>
                <StyledTable>
                <thead>
                    <TableRow>
                    <TableHeader>Crypto</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>24h Change</TableHeader>
                    <TableHeader>Action</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {Object.keys(cryptoData).map((cryptoKey) => {
                    const { PRICE, TOPTIERVOLUME24HOUR } = cryptoData[cryptoKey].USD;

                    const formattedChangePct24Hour = parseFloat(TOPTIERVOLUME24HOUR).toFixed(4);

                    if (selectedCryptoKey && cryptoKey !== selectedCryptoKey) {
                        return null;
                    }

                    
                    return (
                        <TableRow key={cryptoKey}>
                        <TableCell onClick={() => handleCryptoSelection(cryptoKey)}><Button>{cryptoKey}</Button></TableCell>
                        <TableCell>{PRICE}$</TableCell>
                        <TableCell>{formattedChangePct24Hour}%</TableCell>
                        <TableCell>
                                        {Array.isArray(favorites) &&
                                        favorites.some((favorite: { id: string; }) => favorite.id === cryptoKey) ? (
                            <Button onClick={() => removeFromFavorites(cryptoKey)}>Remove</Button>
                                ) : (
                            <Button onClick={() => addToFavorites(cryptoKey)}>Add to Favorites</Button>
                                        )}
                        </TableCell>
                        </TableRow>
                    );
                    })}
                </tbody>
                </StyledTable>
                
            </TableWrapper>
            );
        };

        return (
            <div>
                <CryptoWebSocket callback={handleCryptoData} />
                <CryptoCard 
                cryptoData={cryptoData}
                selectedCryptoKey={selectedCryptoKey}
                setSelectedCryptoKey={setSelectedCryptoKey} 
            />{renderCryptoData()}
            </div>
            );
    };
export default CryptoTracker;