import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";

// Styled components using @mui/system
const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: "#24262b",
  padding: "70px 0",
  marginTop: "50px",
}));

const FooterCol = styled(Grid)(({ theme }) => ({
  padding: "0 15px",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
    marginBottom: "30px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#ffffff",
  textTransform: "capitalize",
  marginBottom: "35px",
  fontWeight: 500,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-10px",
    backgroundColor: "#e91e63",
    height: "2px",
    boxSizing: "border-box",
    width: "50px",
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  fontSize: "16px",
  textTransform: "capitalize",
  textDecoration: "none",
  paddingTop: "5px",
  fontWeight: 300,
  color: "#fff",
  display: "block",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#ffffff",
    paddingLeft: "8px",
  },
}));

const SocialIcon = styled('div')(({ theme }) => ({
  display: "inline-block",
  height: "40px",
  width: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  margin: "0 10px 10px 0",
  textAlign: "center",
  lineHeight: "40px",
  borderRadius: "50%",
  color: "#ffffff",
  transition: "all 0.5s ease",
  "&:hover": {
    color: "#24262b",
    backgroundColor: "#ffffff",
  },
}));

const FooterApp = () => {
  return (
    <Footer>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <FooterCol item xs={12} sm={6} md={3}>
            <FooterTitle variant="h5">
              RESOURCES
            </FooterTitle>
            <ul>
              <li>
                <FooterLink href="#">
                  Pricing & Upgrade
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  About
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#">
                  Blog
                </FooterLink>
              </li>
            </ul>
          </FooterCol>
          <FooterCol item xs={12} sm={6} md={3}>
            <FooterTitle variant="h5">
              TOOLS
            </FooterTitle>
            <ul>
              <li>
                <FooterLink to={"/"}>
                  Compress PDF
                </FooterLink>
              </li>
              <li>
                <FooterLink to={"/video"}>
                  Video Editor
                </FooterLink>
              </li>
              <li>
                <FooterLink to={"/docx"}>
                  Docx Editor
                </FooterLink>
              </li>
              <li>
                <FooterLink to={"/image"}>
                  Images Editor
                </FooterLink>
              </li>
            </ul>
          </FooterCol>
          <FooterCol item xs={12} sm={6} md={3}>
            <FooterTitle variant="h5">
              CONTACT
            </FooterTitle>
            <ul>
              <li>
                <FooterLink href="#">
                  support@filescompressor.com
                </FooterLink>
              </li>
            </ul>
          </FooterCol>
        </Grid>
      </Container>
    </Footer>
  );
};

export default FooterApp;
