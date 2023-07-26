import styled from 'styled-components';
import Facebook from '../assets/logo-facebook.svg';
import Instagram from '../assets/logo-instagram.svg';
import Twitter from '../assets/logo-twitter.svg';

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction:column;
    height: auto;
    background-color: #8A897C;
    color: #fff;
`;
const FooterTitle = styled.div`
    margin: 10px 0px 0px 0px;
    padding: 0px 10px 10px 0px;
`;

const FooterUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center; 
    margin: 5px 40px 5px 0px;
`
const FooterLi = styled.li`
    padding: 0 10px 0px 0;
`
const FooterLink = styled.a`
    color: #135f2e;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
const Logo = styled.img`
    width: 24px;
    height: auto;
`;
const FooterNumber = styled.div`
    padding: 0px 13px 10px 0px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTitle><em>BargerTracker</em></FooterTitle> 
            <FooterUl>
                <FooterLi><FooterLink href="#"><Logo src={Facebook} alt="Facebook"/></FooterLink></FooterLi>
                <FooterLi><FooterLink href="#"><Logo src={Instagram} alt="Instagram"/></FooterLink></FooterLi>
                <FooterLi><FooterLink href="#"><Logo src={Twitter} alt="Twitter"/></FooterLink></FooterLi>
            </FooterUl>
            <FooterNumber><em>2023</em></FooterNumber>
        </FooterWrapper>
        
    );
};

export default Footer;
