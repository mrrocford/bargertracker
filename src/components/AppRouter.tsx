import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './common/FavoritesPage';
import Wrapper from './Wrapper';
import EthereumBalance from './common/EthereumBalance';
import Transaction from './common/Transaction';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path='/wallet' element={<EthereumBalance/>} />
            <Route path='/transaction' element={<Transaction/>} />
            <Route path="/*" element={<Wrapper />} />
        </Routes>
    );
};

export default AppRouter;
