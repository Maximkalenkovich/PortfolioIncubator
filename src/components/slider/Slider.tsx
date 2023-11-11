import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import "../../styles/Slider.css"



type slidePropsType = {
text: string
username: string
}

const Slide = (props: slidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.username}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide username = {"ivan ivanow"}
     text= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."}  />,
    
    <Slide username = {"dima lohov"}
    text= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."}  />,
     
     <Slide username = {"igor pupkin"}
    text= {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."}  />
];

export const Slider = () => (

    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


