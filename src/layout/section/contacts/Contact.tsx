import { ElementRef, useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Containers } from '../../../components/slider/Containers';
import { S } from './Contacts_Styled';
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

if(!form.current) return

  
      emailjs.sendForm('service_oq5dv6b', 'template_3z1ok5f', form.current, '2Dwk1Aa77XOk_9zpW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <S.Contacts id = {"Contact"}>

            <Containers>
            <SectionTitle>Contact</SectionTitle>
            <S.Form ref={form} onSubmit={sendEmail}> 
                <S.Field required placeholder='Name' name={'user_name'}/>
                <S.Field required placeholder='email' name={'email'}/>
                <S.Field required placeholder='Subject' name={'subject'}/>
                <S.Field required placeholder="Message" as={"textarea"} name={'message'}/>
                <Button type={"submit"}>Send Message</Button>
            </S.Form>
            </Containers>
        </S.Contacts>
    );
};

