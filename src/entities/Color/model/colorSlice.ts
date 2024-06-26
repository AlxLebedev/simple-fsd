import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ColorDataType, ColorsState } from "@entities/Color/model/types";
import { getColorsFromStorage } from "../lib/getColorsFromStorage";

const initialState: ColorsState = {
    list: getColorsFromStorage(),
};

export const colorSlice = createSlice({
    name: "colors",
    initialState: initialState,
    reducers: {
        addColor: (state, action: PayloadAction<ColorDataType>) => {
            if (action.payload) state.list = [...state.list, action.payload];
            return state;
        },
        removeColor: (state, action: PayloadAction<string>) => {
            if (action.payload) state.list = state.list.filter((color) => color.id !== action.payload);
            return state;
        },
    }
});

export const { addColor, removeColor } = colorSlice.actions;

export default colorSlice.reducer;
