import { HomeHeaderButton, HomeImg, HomeV1, HomeV2 } from "../../Style/StyledComponent.js";
import { Link } from "react-router-dom";
const HomeBody = () => {
    return (

        <HomeV1>
            <HomeV2>
                <h1>Yemek, market ve günlük tüm ihtiyaçların için </h1>
                <h1>Hemen Ara</h1>
                <div>
                    <Link to="/Login">
                        <HomeHeaderButton inputWidth="170px" inputHeight="100px">Ara</HomeHeaderButton>
                    </Link>
                </div>
            </HomeV2>
            <HomeImg src={require("../../../img/foodhome.jpg")} />
        </HomeV1>
    );
}
export default HomeBody;