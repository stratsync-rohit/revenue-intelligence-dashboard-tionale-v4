
import AppRouter from "./router/Router";
import React, { useEffect } from "react";


declare global {
  interface Window {
    USER_CSS_URL?: string;
  }
}

const App: React.FC = () => {

  useEffect(() => {
    
    fetch("/api/get-user-css-url")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.url) {
          window.USER_CSS_URL = data.url;
          
          if (!document.querySelector(`link[href='${data.url}']`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = data.url;
            document.head.appendChild(link);
          }
        }
      });
  }, []);

  return <AppRouter />;
};

export default App;
