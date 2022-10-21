import { FooterDiv, FooterNav, FooterItems, FooterLink } from "../../Style/StyledComponent.js";
const Footer = () => {

    return (

        <FooterDiv>
            <FooterNav>
                <FooterItems>
                    <h5>Support</h5>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Help</FooterLink>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Advisories</FooterLink>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Status</FooterLink>
                </FooterItems>
            </FooterNav>
            <FooterNav>
                <FooterItems>
                    <h5>Company</h5>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>About</FooterLink>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Blog</FooterLink>
                </FooterItems>
            </FooterNav>
            <FooterNav>
                <FooterItems>
                    <h5>Terms & Policies</h5>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Policies</FooterLink>
                </FooterItems>
                <FooterItems>
                    <FooterLink to={"/x"}>Policies</FooterLink> Terms of Use
                </FooterItems>
            </FooterNav>
        </FooterDiv>
    );
}
export default Footer