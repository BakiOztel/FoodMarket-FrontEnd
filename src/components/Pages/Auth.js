import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { userIsLogin } from "../../Api/userApi.js";
const PrivateRoute = () => {
    const [cookies] = useCookies();
    const [auth, setAuth] = useState(true);
    const [user, setUser] = useState({ email: null, _id: null, error: null });
    let location = useLocation();
    useEffect(() => {
        async function userLoginTF() {
            if (cookies.user) {
                let { data } = await userIsLogin();
                if (data.user) {
                    setUser({ email: data.user.email, _id: data.user.id, error: false });
                    setAuth(true);
                } else {
                    setUser({ email: null, _id: null, error: true })
                    setAuth(false);
                }
            } else {
                setUser({ email: null, _id: null, error: false });
                setAuth(false);
            }
        }
        userLoginTF();
    }, [location])

    return (
        auth ? <Outlet context={[user, setUser]} /> : <Navigate to="/login" />
    )
}
export default PrivateRoute;