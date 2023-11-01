import React from "react";
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from "../../components/menu/FlexWrapper";
import { S } from "./Footer_Styles";


const SociaItemsData = [
    {
        iconId: "instagram",
    },
    {
        iconId: "vk",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "linkedin",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" align="center">
                <S.Name>Maksim </S.Name>
                <S.SocialList>

                    {SociaItemsData.map((F, index: number) => {
                        return (
                            <S.SocialItems key={index}>
                            <S.SocialLink>
                                <Icon iconId={F.iconId} width="21px" height="21px" viewBox="0 0 21 21" />
                            </S.SocialLink>
                        </S.SocialItems>
                             )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Maksim Kalenkovich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}

