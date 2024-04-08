import {
    TypedUseSelectorHook,
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from "react-redux";
import { AppDispatch, RootState} from "../../app/store"; // declare.d.ts

export const useDispatch: () => AppDispatch = useDispatchBase
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase