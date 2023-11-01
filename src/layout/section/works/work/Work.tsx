import React from "react"
import { LinkWork } from "../../../../components/link/LinkWork";
import { Button } from "../../../../components/button/Button";
import { S } from "./WorksStyles";


type WorkPropsType ={
title: string
text: string
src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work> 

            <S.ImageWrapper>
            <S.Image src={props.src} alt="" />
            <Button>view project</Button>
            </S.ImageWrapper>


            <S.Description><S.Title>{props.title}</S.Title>
             <S.Text>{props.text}</S.Text>
             <LinkWork href="#">Demo</LinkWork>
             <LinkWork href="#">Code</LinkWork>
             </S.Description>
            
             
        </S.Work>
        );
};

