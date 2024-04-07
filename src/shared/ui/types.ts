import { CSSProperties } from "react";

export type DividerType = {
    className?: string;
};

export type LogoType = {
    linkUrl: string;
    imgUrl: string;
    imgAlt: string;
    modifier?: string;
    externalClassName?: string;
};

export type ButtonType = {
    text: string;
    type?: "button" | "submit" | "reset";
    handler?: (e?: unknown) => void;
    externalClassName?: string;
};

interface IInput {
    id: string;
    label?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
}

export interface IInputText extends IInput {
    placeholder?: string;
}

export interface IInputColor extends IInput {
    defaultValue?: CSSProperties["color"];
}
