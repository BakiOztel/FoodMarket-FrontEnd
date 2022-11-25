import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home.js";
import Login from "./components/Pages/LoginRegisterPage/Login.js";
import Register from "./components/Pages/LoginRegisterPage/Register.js";
import Profile from "./components/Pages/ProfilePage/Profile.js";
import RequireAuth from "./components/Pages/Auth.js";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
