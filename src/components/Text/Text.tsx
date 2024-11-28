import { ReactNode } from "react";

export enum TextColor {
    SM,
    MD,
    LG,
}

export enum TextSize {
    SM,
    MD,
    LG,
}

export type TextProps = {
    color: string;
    size: string;
    weight: string;
    children: ReactNode | ReactNode[];
}

export function Text({children}: TextProps){
    return <p>{children}</p>
}
