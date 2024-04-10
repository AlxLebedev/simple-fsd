import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ColorCardType } from "../model/types";

export const ColorCard = ({ color: {id, name, code}, renderDelButton, externalClassName }: ColorCardType): ReactElement => {
    return (
        <li className={clsx(styles["color-card"], externalClassName)}>
            {renderDelButton(id, styles["color-card__del"])}
            <h3 className={styles["color-card__name"]}>{name}</h3>
            <p className={styles["color-card__code"]}>{code}</p>
            <div className={styles["color-card__example"]} style={{ backgroundColor: code }}></div>
        </li>
    );
};
