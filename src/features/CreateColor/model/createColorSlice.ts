import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ColorType } from "./types";

type ColorsState = {
    colors: ColorType[];
};

const initialState: ColorsState = {
    colors: [],
};

export const colorSlice = createSlice({
    name: "colors",
    initialState: initialState,
    reducers: {
        addColor: (state, action: PayloadAction<ColorType>) => {
            if (action.payload) state.colors = [...state.colors, action.payload]
        }
    }
});

export const { addColor } = colorSlice.actions;
export const selectColors = (state: RootState) => state.colors;

export default colorSlice.reducer;