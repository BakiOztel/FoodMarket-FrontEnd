import { Logo, LogoLink, HomeNavbar, LoginRegisterheader, HomeHeaderButton } from "../../Style/StyledComponent.js";
import { Link } from "react-router-dom";
const HomeHeaderLayout = ({ page }) => {
    return (
        <HomeNavbar>

            <LogoLink to="/">
                <Logo src={require("../../../img/Adsız.png")} />
            </LogoLink>
            <LoginRegisterheader>
                {page === "Home" ? (

                    <Link to="/Login">
                        <HomeHeaderButton>Login</HomeHeaderButton>
                    </Link>
                ) : (<div></div>)}

            </LoginRegisterheader>
        </HomeNavbar>
    );
}
export default HomeHeaderLayout;