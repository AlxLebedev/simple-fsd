import { ColorDataType } from "@entities/Color/model/types";

export const removeColorFromStorage = (id: string): void => {
    const storageData = localStorage.getItem("colorsStorage");

    if (storageData) {
        const currentColors: ColorDataType[] = JSON.parse(storageData);
        const actualColors = currentColors.filter((color) => color.id !== id);
        if (actualColors.length) {
            localStorage.setItem("colorsStorage", JSON.stringify([ ...actualColors ]));
        } else {
            localStorage.removeItem("colorsStorage");
        }
    }
};
