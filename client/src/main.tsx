// <script>
//   window.USER_CSS_URL = "https://example.com/path/to/your.css";
// </script>
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './router/Router';
import { ClientProvider } from "./context/ClientContext";
import { Provider } from 'react-redux';
import store from './store/store';



import '../src/css/Parent-Index.css';



const personalCssPath = '/src/css/index.css';
fetch(personalCssPath, { method: 'HEAD' })
  .then((res) => {
    if (res.ok) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = personalCssPath;
      document.head.appendChild(link);
    }
  })
  .catch(() => {});

// Load public user CSS URL if provided  from backend or window.USER_CSS_URL)
const userCssUrl = (window as any).USER_CSS_URL;
if (userCssUrl && typeof userCssUrl === 'string') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = userCssUrl;
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ClientProvider value={{
        name: "Tionale",
        industry: "Perfumes and Cosmetics Trading",
      }}>
        <AppRouter />
      </ClientProvider>
    </Provider>
  </StrictMode>
);
