import styled from "styled-components";
import Body from "./Body";



const WrapperStyled = styled.div`
    background-color:#D2D7DF;
    color: #040404;
    
`
function Wrapper () {
    return(
        <WrapperStyled>
            <Body />
        </WrapperStyled>
    );
}


export default Wrapper;