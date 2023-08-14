import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { CryptoData } from './CryptoData';


const CryptoWebSocket: React.FC<{ callback: (data: CryptoData) => void }> = ({ callback }) => {
    const apiKey = 'c9282cbd947195bd29138eb909a44c9654238a0e983f31139b70fba848507048';
    const socketURL = `wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`;
    const subscriptionMsg = [
        '5~CCCAGG~BTC~USD',
        '5~CCCAGG~ETH~USD',
        '5~CCCAGG~LTC~USD',
        '5~CCCAGG~BNB~USD',
        '5~CCCAGG~DOGE~USD',
        '5~CCCAGG~USDT~USD',
        '5~CCCAGG~SOL~USD',
        '5~CCCAGG~DAI~USD',
        '5~CCCAGG~SHIB~USD',
        '5~CCCAGG~XLM~USD',
    ];

    useEffect(() => {
        const socket = socketIOClient(socketURL, {
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            console.log('Connected to WebSocket');
            socket.emit('SubAdd', subscriptionMsg);
            console.log('Sent subscription message');
        });

        socket.on('message', (event: any) => {
            const parsedData = JSON.parse(event);
            console.log('CryptoData', parsedData);

            const symbol = parsedData.FROMSYMBOL;

            callback({
                [symbol]: {
                    USD: {
                        PRICE: parsedData.PRICE,
                        TOPTIERVOLUME24HOUR: parsedData.TOPTIERVOLUME24HOUR,
                        VOLUME24HOURTO: parsedData.VOLUME24HOURTO,
                    },
                    id: symbol,
                },
            });
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket');
        });

        return () => {
            socket.disconnect();
        };
    }, [callback]);

    return null;
};

export default CryptoWebSocket;
