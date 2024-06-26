import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import HomePage from "@pages/home/index.tsx";
import { store } from "@app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HomePage />
    </Provider>
);
