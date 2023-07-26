import { useState } from "react";
import styled from "styled-components";
import Badger from "../assets/images/badger.png"
import { IoIosHome, IoIosBookmark, IoIosRocket, IoIosWallet, IoIosLogIn} from "react-icons/io";
import { Link } from "react-router-dom";
import LogIn from "./common/LogIn";



const HeaderWrapper = styled.header`
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 70px;
    background-color: #8A897C;
    color: #fff;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
    @media (max-width: 390px) {
        flex-direction: column;
        padding: 10px;
    }
`;

const WrapperLogo = styled.div`
    display: flex;
    justify-content:space-evenly;


    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    @media (max-width: 390px) {
        justify-content: center;
        margin-bottom: 10px;
    }
`

const Logo = styled.img`
    width: 60px;
    height: auto;
    margin: 0px 0px 0px 0px;
`;

const TitleLogo = styled.div`
    font-size: 30px;
    margin: 15px 0px 0px 20px;
`;

const Navigation = styled.nav`
    padding: 0 150px 0 0px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        margin: 5px auto;
    }
    @media (max-width: 390px) {
        justify-content: center;
        width: 100%;
        margin: 5px auto ;
        padding-left: 10px;
    }
`;

const NavigationItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

    &:hover .icon {
    transform: scale(1.2);
    }
`;

const StyledLink = styled(Link)`
    color: #fff;

    &:hover {
    color: #353535;}
`;


const Icon = styled.div`
    font-size: 24px;
    transition: transform 0.2s;
`; 

const NavigationButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;

    &:hover .icon {
    transform: scale(1.2);
    color: #353535;
    }
    @media (max-width: 390px) {
        justify-content: center;
        width: 100%;
        margin: 5px auto ;
    }
`;



const Header = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    
    return (
        <HeaderWrapper>
            <WrapperLogo>
                <Logo src={Badger} alt="Logo"/>
                <TitleLogo>BadgerTracker</TitleLogo>
            </WrapperLogo>
        
            <Navigation>
                <NavigationItem>
                    <StyledLink to="/">
                        <Icon className="icon">
                            <IoIosHome />
                        </Icon>
                    </StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to="/favorites">
                        <Icon className="icon">
                            <IoIosBookmark/>
                        </Icon>
                    </StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to='/transaction'>
                        <Icon className="icon">
                            <IoIosRocket/>
                        </Icon>
                    </StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to='/wallet'>
                        <Icon className="icon">
                            <IoIosWallet/>
                        </Icon>
                    </StyledLink>
                </NavigationItem>
                
            </Navigation>
            <NavigationButton>
                        <Icon className="icon" onClick={handleToggleModal}>
                        <IoIosLogIn />
                    </Icon>
                    {isModalOpen && (
                        <LogIn/>
                    )}
                </NavigationButton>
                
        </HeaderWrapper>
        
    );
};

export default Header;
