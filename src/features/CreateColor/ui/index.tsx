import { ReactElement, SyntheticEvent, useRef } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { CreateColorFormType } from "@features/CreateColor/model/types";
import { InputText, InputColor, Button } from "@shared/ui";
import { extractFormData } from "../lib/extractFormData";
import { saveColorInStorage } from "../lib/saveColorInStorage";
import { addColor } from "@entities/Color";
import { useDispatch } from "@shared/hooks/redux";

export const CreateColorForm = ({ externalClassName }: CreateColorFormType): ReactElement => {
    const dispatch = useDispatch();
    const form = useRef<HTMLFormElement>(null);

    const submitHandler = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        
        if (form.current) {
            const currentColor = extractFormData(new FormData(form.current));
            dispatch(addColor(currentColor));
            saveColorInStorage(currentColor);
        }
    };

    return (
        <form className={clsx(styles["color-form"], externalClassName)} onSubmit={submitHandler} ref={form} >
            <InputText
                id="color-name"
                label="Color name"
                placeholder="For example - deep purple"
                wrapperClassName={styles["color-form__input-text"]}
                labelClassName={styles["color-form__text-label"]}
            />
            <InputColor
                id="color-code"
                defaultValue="#d1a1ff"
                wrapperClassName={styles["color-form__input-color"]}
            />
            <Button text="Add color" externalClassName={styles["color-form__button"]} type="submit" />
        </form>
    );
};
