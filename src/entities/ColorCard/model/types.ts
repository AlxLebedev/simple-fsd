import { CSSProperties } from "react";

export type ColorType = {
    id: string;
    name: string;
    code: CSSProperties["color"];
};

export type ColorCardType = {
    color: ColorType,
    renderDelButton: (id: string, className: string) => JSX.Element;
    externalClassName?: string;
};
