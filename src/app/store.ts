import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "@entities/Color";

export const store = configureStore({
    reducer: {
        colors: colorReducer,
    },
});
