import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { ColorListType } from "../model/types";
import { useSelector } from "@shared/hooks/redux";
import { Color, selectColorsList } from "@entities/Color";
import { DeleteColorButton } from "@features/DeleteColor";

export const ColorList = ({ externalClassName }: ColorListType): ReactElement | null => {
    const colorsList = useSelector(selectColorsList);

    return (
        !colorsList.length ?
        null :
        <ul className={clsx(styles["color-list"], externalClassName)}>
            {colorsList.map((color) => (
                <Color
                    color={color}
                    renderDelButton={
                        (id, className) => <DeleteColorButton id={id} externalClassName={className} />
                    }
                    key={color.id}
                />
            ))}
        </ul>
    );
};
