import styled from "styled-components";
import CryptoTracker from "./common/CryptoTracker";


const BodyStyled = styled.div`
    margin:0px 50px 20px 50px;
`
function Body () {
    return(
        <BodyStyled>
            <CryptoTracker />
        </BodyStyled>
    );
}


export default Body;