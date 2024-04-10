import { CSSProperties } from "react";

export type CreateColorFormType = {
    externalClassName?: string;
};

export type ColorType = {
    id: string;
    name: string;
    code: CSSProperties["color"];
};
