import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { Logo } from "../../../shared/ui";
import { HeaderType } from "../model/types";

export const Header = ({ className }: HeaderType): ReactElement => {
    return (
        <div className={clsx(styles["header"], className)}>
            <div className={styles["header__logo-container"]}>
                <Logo  linkUrl="https://vitejs.dev" imgUrl="/vite.svg" imgAlt="Vite logo" modifier="vite" />
                <Logo linkUrl="https://react.dev" imgUrl="/react.svg" imgAlt="React logo" modifier="react" />
            </div>
            <div className={styles["header__heading-container"]}>
                <h1 className={styles["header__title"]}>Vite + React</h1>
                <p className={styles["header__subtitle"]}>&& pseudo FSD &#128580;</p>
            </div>
        </div>
    );
};
