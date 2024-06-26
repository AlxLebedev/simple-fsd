import {
    TypedUseSelectorHook,
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
} from "react-redux";

export const useDispatch: () => AppDispatch = useDispatchBase
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase