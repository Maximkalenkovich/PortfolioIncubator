import React from "react";
import iconSprite from "../../accept/images/icon-sprite.svg"

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};
export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      height={props.height || "50px"}
      width={props.width || "50px"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
    >
      <use xlinkHref={`${iconSprite}#${props.iconId} `} />
    </svg>
  );
};
