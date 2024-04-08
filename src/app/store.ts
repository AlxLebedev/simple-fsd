import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "@features/CreateColor/model/createColorSlice";

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
    },
});
