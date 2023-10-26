import { theme } from "./Theme";


type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineheight?: number;
    fmin?: number;
    fmax?: number;

    
}

export const font = ({family, weight, color, lineheight, fmax,fmin}: FontPropsType) => `
font-family: ${family || "Poppins"};
font-weight: ${weight || 400};
color: ${color || theme.colors.font};
line-height: ${lineheight || 1.2};

font-size: calc( (100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px);


`

