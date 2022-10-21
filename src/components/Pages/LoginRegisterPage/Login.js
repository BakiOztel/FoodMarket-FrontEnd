import { Container, Row } from "react-bootstrap";
import { HomeHeaderButton, LoginRegisterBox, LoginRegisterDiv, LoginRegisterForm, LoginRegisterPage } from "../../Style/StyledComponent.js";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../Validation/Validation.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import HomeHeaderLayout from "../HomePage/HomeHeader.js";
import { redirect } from "react-router-dom";
import { userLoginRequest } from "../../../Api/userApi.js";


const Login = () => {
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(LoginSchema)
    });
    const onSubmit = async (data) => {
        const datax = await userLoginRequest(data);
        redirect("/profile");

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