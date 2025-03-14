import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { MortgageProvider } from "./context/MortgageContext";

createRoot(document.getElementById("root")!).render(
  <MortgageProvider>
    <App />
  </MortgageProvider>
);
