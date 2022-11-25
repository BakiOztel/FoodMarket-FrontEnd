import { Container, Row } from "react-bootstrap";
import { HomeHeaderButton, LoginRegisterBox, LoginRegisterDiv, LoginRegisterForm, LoginRegisterPage } from "../../Style/StyledComponent.js";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../Validation/Validation.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, Link } from "react-router-dom";
import HomeHeaderLayout from "../HomePage/HomeHeader.js";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../Redux/authSlice.js";
import { useLoginMutation } from "../../../Api/AuthApiSlice.js";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(LoginSchema)
    });

    const onSubmit = async (data) => {
        try {
            const userData = await login(data).unwrap();
            dispatch(setCredentials({ ...userData }))
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Container>
            <Row>
                <HomeHeaderLayout />
            </Row>
            <Row>
                <LoginRegisterPage>
                    <LoginRegisterDiv>
                        <h2>Login</h2>
                        <LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
                            <LoginRegisterBox>
                                <input placeholder=" "  {...register("email", { required: "doldur lan" })} />
                                <label>Email</label>
                            </LoginRegisterBox>
                            <LoginRegisterBox>
                                <input placeholder=" "  {...register("password", { required: "doldur lan" })} />
                                <label> Password</label>
                            </LoginRegisterBox>
                            <HomeHeaderButton inputColor="#E60965" type="submit">Login</HomeHeaderButton>
                            <Link to="/Register">
                                <HomeHeaderButton >Register</HomeHeaderButton>
                            </Link>
                        </LoginRegisterForm>
                    </LoginRegisterDiv>
                </LoginRegisterPage>
            </Row>
        </Container>
    );
}
export default Login;