import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { DividerType } from "../types";

export const Divider = ({ className }: DividerType): ReactElement => {
    return (
        <div className={clsx(styles["divider"], className)}></div>
    );
};
