import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../Redux/authSlice.js";
const Profile = () => {
    const profile = useSelector(selectCurrentUser);
    return (
        <>
            {console.log(profile)}
        </>
    );
}
export default Profile;