import { v1 as uuidv1 } from "uuid";
import { ColorDataType } from "@entities/Color/model/types";

export const extractFormData = (data: FormData): ColorDataType => {
    const id = uuidv1();
    const name = String(data.get("color-name") || "untitled");
    const code = String(data.get("color-code") || "#d1a1ff");
    return { id, name, code };
};
