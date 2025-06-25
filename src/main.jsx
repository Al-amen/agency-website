import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'sweetalert2/dist/sweetalert2.js'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Service from "./pages/home/Service.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Blogs from "./pages/blog/Blogs.jsx";
import Pricing from "./pages/home/Pricing.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="*" element={<ErrorPage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path='/dashboard' element={ <PrivateRoute> <Dashboard/> </PrivateRoute> } />

        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
 