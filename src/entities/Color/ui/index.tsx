import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ColorType } from "../model/types";

export const Color = ({ color: {id, name, code}, renderDelButton, externalClassName }: ColorType): ReactElement => {
    return (
        <li className={clsx(styles["color"], externalClassName)}>
            {renderDelButton(id, styles["color__del"])}
            <h3 className={styles["color__name"]}>{name}</h3>
            <p className={styles["color__code"]}>{code}</p>
            <div className={styles["color__example"]} style={{ backgroundColor: code }}></div>
        </li>
    );
};
