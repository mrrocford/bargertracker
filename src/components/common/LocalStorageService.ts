

class LocalStorageService {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    getItem(key: string): any[] {
        const item = this.storage.getItem(key);
        try {
            return JSON.parse(item || '[]');
        } catch (error) {
            console.error('Error parsing localStorage item:', error);
            return [];
        }
    }

    setItem(key: string, value: any): void {
        const stringValue = JSON.stringify(value);
        this.storage.setItem(key, stringValue);
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
