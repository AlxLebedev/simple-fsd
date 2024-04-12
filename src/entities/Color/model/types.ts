import { CSSProperties } from "react";

export type ColorDataType = {
    id: string;
    name: string;
    code: CSSProperties["color"];
};

export type ColorType = {
    color: ColorDataType,
    renderDelButton: (id: string, className: string) => JSX.Element;
    externalClassName?: string;
};

export type ColorsState = {
    list: ColorDataType[];
};
