import styled from 'styled-components';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';


const AppStyled = styled.div`
  background-color:#D2D7DF;
  font-family: 'VT323';
`

function App() {
  return (
    <AppStyled>
      <Router>
        <Header />
        <AppRouter/>
        <Footer />
      </Router>
    </AppStyled>
  );
}

export default App;
