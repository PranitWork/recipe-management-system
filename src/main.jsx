import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DataContext from "./context/DataContext.jsx" 

createRoot(document.getElementById("root")).render(
    <DataContext>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </DataContext>
);
