import { ReactElement } from "react";
import { DeleteColorButtonType } from "../model/types";
import { Button } from "@shared/ui";
import { removeColor } from "@entities/Color";
import { removeColorFromStorage } from "../lib/removeColorFromStorage";
import { useDispatch } from "@shared/hooks/redux";

export const DeleteColorButton = ({ id, externalClassName }: DeleteColorButtonType): ReactElement => {
    const dispatch = useDispatch();

    const deleteColorHandler = (): void => {
        dispatch(removeColor(id));
        removeColorFromStorage(id);
    };

    return (
        <Button text="" handler={deleteColorHandler} externalClassName={externalClassName} />
    );
};
