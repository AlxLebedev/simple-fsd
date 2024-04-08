import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import HomePage from '../pages/home/index.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <HomePage />
        </Provider>
    </React.StrictMode>,
);
