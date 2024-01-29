import React from "react";
import { IconButton } from "@mui/material";

const SocialIconButton = ({ icon }) => {
  const iconButtonStyles = {
    backgroundColor: 'white',
    marginRight: '5px',
    padding: '5px',
  };

  const iconStyles = {
    color: 'black',
  };

  return (
    <IconButton style={iconButtonStyles}>
      <i className={`fab ${icon}`} style={iconStyles}></i>
    </IconButton>
  );
};

const Footer = () => {
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
