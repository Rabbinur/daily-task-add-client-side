import logo from "./logo.svg";
import "./App.css";

import { router } from "./Component/Routes/Routes";
import { RouterProvider, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>

      <Toaster />
    </div>
  );
}

export default App;
