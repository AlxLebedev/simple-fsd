import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ColorType, ColorsState } from "@entities/Color/model/types";

const initialState: ColorsState = {
    list: [],
};

export const colorSlice = createSlice({
    name: "colors",
    initialState: initialState,
    reducers: {
        addColor: (state, action: PayloadAction<ColorType>) => {
            if (action.payload) state.list = [...state.list, action.payload]
        }
    }
});

export const { addColor } = colorSlice.actions;

export default colorSlice.reducer;
