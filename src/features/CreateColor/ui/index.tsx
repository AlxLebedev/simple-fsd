import { ReactElement, useRef } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import { CreateColorFormType } from "@features/CreateColor/model/types";
import { InputText, InputColor, Button } from "@shared/ui";
import { addColor } from "@features/CreateColor/model/createColorSlice";
import { useDispatch } from "@shared/hooks/redux";

export const CreateColorForm = ({ externalClassName }: CreateColorFormType): ReactElement => {
    const dispatch = useDispatch();
    const form = useRef(null);

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const name = String(formData.get("color-name") || "untitled");
            const code = String(formData.get("color-code") || "#d1a1ff");
            dispatch(addColor({ name, code }));
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
