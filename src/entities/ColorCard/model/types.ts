import { CSSProperties } from "react";

export type ColorCardType = {
    color: {
        name: string;
        code: CSSProperties["color"];
    },
    externalClassName?: string;
};
