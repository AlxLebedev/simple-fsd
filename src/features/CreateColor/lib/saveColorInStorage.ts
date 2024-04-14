import { ColorDataType } from "@entities/Color/model/types";

export const saveColorInStorage = (color: ColorDataType): void => {
    const storageData = localStorage.getItem("colorsStorage");

    if (!storageData) {
        localStorage.setItem("colorsStorage", JSON.stringify([color]));
    } else {
        const currentColors = JSON.parse(storageData);
        localStorage.setItem("colorsStorage", JSON.stringify([ ...currentColors, color]));
    }
};
