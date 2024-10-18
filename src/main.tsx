import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
// @ts-expect-error (because of error TS7016: Could not find a declaration file for module './utils/scrollToTop.js')
import ScrollToTop from './utils/scrollToTop.js';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { store } from './store/store';

const value = {
    ripple: true,
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <PrimeReactProvider value={value}>
                <Provider store={store}>
                    <App />
                </Provider>
            </PrimeReactProvider>
        </BrowserRouter>
    </StrictMode>,
);
