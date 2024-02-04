import React from "react";
import SocialIconButton from "../Elements/FooterElements/SocialAccountButton";

const Footer = () => {
  // inline styles
  const footerStyles = {
    backgroundColor: '#284b63',
    color: 'white',
    textAlign: 'center',
    padding: '8px',
    marginTop: '30px',
  };

  return (
    <footer style={footerStyles}>
      <h3>List Event Banyumas</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <br />
      <SocialIconButton icon="fa-twitter" />
      <SocialIconButton icon="fa-facebook" />
      <SocialIconButton icon="fa-instagram" />
      <SocialIconButton icon="fa-linkedin" />
      <br /><br /><br />
      <p>Copyright List Event Banyumas. All right reserved.</p>
    </footer>
  );
};

export default Footer;
