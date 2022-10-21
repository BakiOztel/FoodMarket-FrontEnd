import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home.js";
import Login from "./components/Pages/LoginRegisterPage/Login.js";
import RegisterPage from "./components/Pages/LoginRegisterPage/Register.js";
import Profile from "./components/Pages/ProfilePage/Profile.js";
import PrivateRoute from "./components/Pages/Auth.js";
function App() {
  const [deneme, setdeneme] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Profile />} path="/profile" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
