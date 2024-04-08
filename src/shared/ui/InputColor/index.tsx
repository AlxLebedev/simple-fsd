import { ReactElement } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { IInputColor } from "@shared/ui/types";

export const InputColor = ({
    id,
    label = "",
    defaultValue = "",
    wrapperClassName,
    labelClassName,
    inputClassName
}: IInputColor): ReactElement => {
    return (
        <div className={clsx(styles["input-color"], wrapperClassName)}>
            <input
                className={clsx(styles["input-color__input"], inputClassName)}
                id={id}
                name={id}
                type="color"
                defaultValue={defaultValue}
            />
            {label ?
                <label className={clsx(styles["input-color__label"], labelClassName)} htmlFor={id}>
                    {label}
                </label>
            : null}
        </div>
    );
};
