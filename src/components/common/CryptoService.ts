import axios from 'axios';

const ApiKey = process.env.REACT_APP_API_KEY_SERV;

export default class CryptoService {
    
    private static instance = new CryptoService();
    private apiKey = ApiKey;
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
