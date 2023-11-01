import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/button/Button';
import { Containers } from '../../../components/slider/Containers';
import { S } from './Contacts_Styled';


export const Contact: React.FC = () => {
    return (
        <S.Contacts>

            <Containers>
            <SectionTitle>Contact</SectionTitle>
            <S.Form> 
                <S.Field placeholder='Name'/>
                <S.Field placeholder='Subject'/>
                <S.Field placeholder="Message" as={"textarea"} />
                <Button type={"submit"}>Send Message</Button>
            </S.Form>
            </Containers>
        </S.Contacts>
    );
};

