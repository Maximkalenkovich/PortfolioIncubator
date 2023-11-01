import { styled } from "styled-components"
import { theme } from "../../../styles/Theme"


const Contacts = styled.section`

`


const Form = styled.form`
max-width: 540px;
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: 16px;
    margin: 0 auto;
    align-items: center;

    textarea{
        resize: none;
        height: 155px;
    }

`

const Field = styled.input`
font-family: 'Poppins', 'sans-serif';
width: 100%;
border: 1px solid ${theme.colors.borderColor};
background-color: ${theme.colors.secondaryBg};
padding: 7px 15px ;
font-size: 12px;
font-weight: 400;
letter-spacing: 0.6px;

color: ${theme.colors.font};

&::placeholder{
    color:${theme.colors.placeholderColor} 
}


    
`

export const S = {
Contacts,
Field,
Form
    
}