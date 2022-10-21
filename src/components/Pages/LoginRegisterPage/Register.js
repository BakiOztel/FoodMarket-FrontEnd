import { Container, Row } from "react-bootstrap";
import HomeHeaderLayout from "../HomePage/HomeHeader.js";
import { LoginRegisterPage, LoginRegisterDiv, LoginRegisterBox, LoginRegisterForm, HomeHeaderButton } from "../../Style/StyledComponent.js";
import { RegisterSchema } from "../../Validation/Validation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterRequest } from "../../../Api/userApi.js";
import { redirect } from "react-router-dom";
const RegisterPage = () => {
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(RegisterSchema)
    });
    const onSubmit = async (data) => {
        try {
            await userRegisterRequest({ email: data.email, password: data.password });
            redirect("/Login");
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
                        <h2>Register</h2>
                        <LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
                            <LoginRegisterBox>
                                <input placeholder=" "  {...register("email", { required: "doldur lan" })} />
                                <label>Email</label>
                            </LoginRegisterBox>
                            <LoginRegisterBox>
                                <input placeholder=" "  {...register("password", { required: "doldur lan" })} />
                                <label> Password</label>
                            </LoginRegisterBox>
                            <LoginRegisterBox>
                                <input placeholder=" "  {...register("confirmPassword", { required: "doldur lan" })} />
                                <label> Confirm Password</label>
                            </LoginRegisterBox>
                            <HomeHeaderButton type="submit">let's start</HomeHeaderButton>
                        </LoginRegisterForm>
                    </LoginRegisterDiv>
                </LoginRegisterPage>
            </Row>
        </Container>
    );
}
export default RegisterPage;