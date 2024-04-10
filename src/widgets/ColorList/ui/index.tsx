import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ColorListType } from "../model/types";
import { selectColorsList } from "@features/CreateColor/model/colorSelector";
import { useSelector } from "@shared/hooks/redux";
import { ColorCard } from "@entities/ColorCard";

export const ColorList = ({ externalClassName }: ColorListType): ReactElement | null => {
    const colorsList = useSelector(selectColorsList);

    return (
        !colorsList.length ?
        null :
        <ul className={clsx(styles["color-list"], externalClassName)}>
            {colorsList.map((color) => <ColorCard color={color} key={color.id}/>)}
        </ul>
    );
};
