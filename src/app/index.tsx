import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from '../pages/home/index.tsx';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
);
