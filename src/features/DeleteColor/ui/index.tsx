import { ReactElement } from "react";
import { DeleteColorButtonType } from "../model/types";
import { Button } from "@shared/ui";

export const DeleteColorButton = ({ id, externalClassName }: DeleteColorButtonType): ReactElement => {
    const deleteColorHandler = (): void => {
        console.log("Del id ", id);
    };

    return (
        <Button text="" handler={deleteColorHandler} externalClassName={externalClassName} />
    );
};
