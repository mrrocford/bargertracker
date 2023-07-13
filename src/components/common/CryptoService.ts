import axios from 'axios';

export default class CryptoService {
    private static instance = new CryptoService();
    private apiKey: string = 'c9282cbd947195bd29138eb909a44c9654238a0e983f31139b70fba848507048';
    private apiUrl: string = 'https://min-api.cryptocompare.com/data';

    private constructor() { }

    public static getInstance(): CryptoService {
        return this.instance;
    }

    public getCryptoData = async (): Promise<CryptoData> => {
        try {
        const response = await axios.get(`${this.apiUrl}/pricemultifull?fsyms=BTC,ETH,LTC,BNB,DOGE,USDT,SOL,DAI,SHIB,XLM&tsyms=USD`, {
            headers: {
            authorization: `Apikey ${this.apiKey}`
            }
        });

        return response.data.RAW;
        } catch (error) {
        throw error;
        }
    }
}

interface CryptoData {
    [index: string]: {
        USD: {
        PRICE: number;
        CHANGEPCT24HOUR: number;
        VOLUME24HOURTO: number;
        }
    }
}
