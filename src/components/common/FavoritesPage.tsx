import { useEffect, useState } from 'react';
import styled from 'styled-components';



const FavoritesStyled = styled.div`
    margin: 20px 50px;
    height: 500px;
`;

const TitleCard = styled.h2`
    
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const StyledLi = styled.li`
    font-size: 20px;
`;


const Button = styled.button`
    font-family: 'VT323';
    font-size: 20px;
    padding: 5px 10px;
    margin-top: 10px;
    margin-right: 5px;
    margin-left: 10px;
    background-color: #f2f2f2;
    border: 0.2px solid #8A897C;
    border-radius: 4px;
    cursor: pointer;


    &:hover {
        background-color: #8A897C;
    }
`;

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));

    useEffect(() => {
        const updateFavorites = () => setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
        
        window.addEventListener('storage', updateFavorites);  // Listen for changes in localStorage

        return () => {
            window.removeEventListener('storage', updateFavorites);  // Clean up listener when component unmounts
        };
    }, []);

    const removeFromFavorites = (id: string) => {
        const updatedFavorites = favorites.filter((favorite: { id: string; }) => favorite.id !== id);
        setFavorites(updatedFavorites);  // Update the state
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  // Update the localStorage
    }

    return (
        <FavoritesStyled>
            <TitleCard>Favorites crypto</TitleCard>
            <StyledUl>
                {favorites.map((favorite: { id: string, name: string, price: string }) => (
                    <StyledLi key={favorite.id}>
                        {favorite.name}: {favorite.price}$
                        <Button onClick={() => removeFromFavorites(favorite.id)}>Remove</Button>
                    </StyledLi>
                ))}
            </StyledUl>
        </FavoritesStyled>
    );
};


export default FavoritesPage;