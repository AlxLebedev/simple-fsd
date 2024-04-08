import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "../features/CreateColor/model/createColorSlice";

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>  // declare.d.ts
export type AppDispatch = typeof store.dispatch  // declare.d.ts
