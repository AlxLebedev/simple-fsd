import { ColorDataType } from "../model/types";

export const getColorsFromStorage = (): ColorDataType[] | [] => {
    const storageData = localStorage.getItem("colorsStorage");

    return storageData ? JSON.parse(storageData) : [];
};