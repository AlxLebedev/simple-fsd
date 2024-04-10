import { v1 as uuidv1 } from "uuid";
import { ColorType } from "../model/types";

export const extractFormData = (data: FormData): ColorType => {
    const id = uuidv1();
    const name = String(data.get("color-name") || "untitled");
    const code = String(data.get("color-code") || "#d1a1ff");
    return { id, name, code };
};