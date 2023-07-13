import { FormEvent } from "react";
import styled from "styled-components";

const Modal = styled.div`
    display: flex;
    flex-direction:column;
    text-align: center;
    position: absolute;
    top: 100%;
    right: 0;
    width: 200px;
    background-color: #efeded;
    padding: 15px;
    border: 1px solid #ccc;
`;

const ModalTitle = styled.h3`
    color: #353535;
    margin-bottom: 10px;
`;

const FormStyled = styled.form`
    margin: 5px 0px 0px 0px;

    input{
        margin: 5px 0px 0px 0px;
    };
`;

const ModalButton = styled.button`
    margin: 10px 0px 0px 0px;
    font-family: 'VT323';
    font-size: 15px;
    padding: 5px 10px;
    margin-top: 10px;
    margin-right: 5px;
    background-color: #f2f2f2;
    border: 0,5px solid #141313;
    border-radius: 4px;
    cursor: pointer;


    &:hover {
        background-color: #D2D7DF;
    }
    
`;


function LogIn() {
    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    return(
        <Modal>
                    <ModalTitle>Login or Register</ModalTitle>
                    <FormStyled onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <ModalButton type="submit">Login</ModalButton>
                    </FormStyled>
        </Modal>

        
    );
}


export default LogIn;