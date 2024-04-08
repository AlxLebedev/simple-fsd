import { ReactElement } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { ButtonType } from "@/shared/ui/types";

export const Button = ({ type = "button", text, handler, externalClassName }: ButtonType): ReactElement => {
    return (
        <button className={clsx(styles["button"], externalClassName)} type={type} onClick={handler}>
            {text}
        </button>
    );
};
