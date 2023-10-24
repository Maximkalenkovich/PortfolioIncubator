import React from 'react';

import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Containers } from '../../../components/slider/Containers';
import { theme } from '../../../styles/Theme';


export const Contact = () => {
    return (
        <StyledContacts>

            <Containers>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm> 
                <Field placeholder='Name'/>
                <Field placeholder='Subject'/>
                <Field placeholder="Message" as={"textarea"} />
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
            </Containers>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`


const StyledForm = styled.form`
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