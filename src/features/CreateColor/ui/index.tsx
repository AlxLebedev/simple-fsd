import { ReactElement, useRef } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { CreateColorFormType } from "../model/types";
import { InputText, InputColor, Button } from "../../../shared/ui";

export const CreateColorForm = ({ externalClassName }: CreateColorFormType): ReactElement => {
    const form = useRef(null);

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            console.log("SubmitHandler", formData);
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
