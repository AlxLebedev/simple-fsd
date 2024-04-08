import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { LogoType } from "@shared/ui/types";

export const Logo = ({ linkUrl, imgUrl, imgAlt, modifier, externalClassName }: LogoType): ReactElement => {
    return (
        <a className={clsx(styles["logo"], {[styles[`logo--${modifier}`]]: modifier }, externalClassName)} href={linkUrl}>
            <img src={imgUrl} alt={imgAlt} />
        </a>
    );
};
