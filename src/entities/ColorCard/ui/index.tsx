import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ColorCardType } from "../model/types";

export const ColorCard = ({ color: {name, code}, externalClassName }: ColorCardType): ReactElement => {
    return (
        <li className={clsx(styles["color-card"], externalClassName)}>
            <h3 className={styles["color-card__name"]}>{name}</h3>
            <p className={styles["color-card__code"]}>{code}</p>
            <div className={styles["color-card__example"]} style={{ backgroundColor: code }}></div>
        </li>
    );
};
