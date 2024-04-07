import { ReactElement } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { IInputText } from "../types";

export const InputText = ({
    id,
    label = "",
    placeholder = "",
    wrapperClassName,
    labelClassName,
    inputClassName
}: IInputText): ReactElement => {
    return (
        <div className={clsx(styles["input-text"], wrapperClassName)}>
            {label ?
                <label className={clsx(styles["input-text__label"], labelClassName)} htmlFor={id}>
                    {label}
                </label>
            : null}
            <input
                className={clsx(styles["input-text__input"], inputClassName)}
                id={id}
                name={id}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
