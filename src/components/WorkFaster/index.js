import React from "react";
import { Grid, Typography, Card, Container, CardContent } from "@mui/material";
import Rocket from "../../Images/rocket.svg";
import Alldevices from "../../Images/Alldevices.svg";
import PdfSvg from "../../Images/PdfSvg.svg";
import GDPR from "../../Images/Gdpr.svg";
import ISO from "../../Images/Iso.svg";
import Highencryption from "../../Images/Highencryption.svg";

const WorkFaster = () => {
  const WorkData = [
    {
      Title: "Start Immediately—No Fuss",
      svg: Rocket,
      content:
        "Nothing to install, no training required. Get started immediately with the simplest tool to compress your files.",
    },
    {
      Title: "Compress Across All Devices",
      svg: Alldevices,
      content:
        "We’re cloud-based, so you can reduce your file size online via any browser and on any device, from desktop to tablet and mobile.",
    },
    {
      Title: "Compress Other File Formats",
      svg: PdfSvg,
      content:
        "Compress more than just PDFs. Use the tool to reduce other file types, such as Word, PPT, Excel, JPG, PNG, GIF, and TIFF.",
    },
  ];

  const WorkDatas = [
    {
      Title: "Data Regulation Compliance",
      svg: GDPR,
      content:
        "Smallpdf is GDPR compliant, which means we’re transparent about how we store, collect, and process your personal data.",
    },
    {
      Title: "Certified ISO/IEC 27001",
      svg: ISO,
      content:
        "We’re ISO/IEC 27001 certified, so we’re audited annually to ensure the safety, security, and integrity of your information.",
    },
    {
      Title: "High-Tech Encryption",
      svg: Highencryption,
      content:
        "We keep your documents secure, even while you’re working on them, with state-of-the-art TLS encryption technology.",
    },
  ];
  return (
    <div style={{ marginTop: "35px", marginBottom: "35px" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#666",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "36px",
            marginBottom: "35px",
          }}
        >
          Work Faster With Smaller PDF Files
        </Typography>
        <Grid container spacing={1}>
          {WorkData.map((data, i) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345, boxShadow: "none" }} key={i}>
                  <img
                    width={80}
                    height={80}
                    src={data.svg}
                    style={{ padding: "10px" }}
                    alt=""
                  ></img>
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                        marginBottom: "15px",
                      }}
                      variant="h3"
                      component="div"
                    >
                      {data.Title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontSize: "16px" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container spacing={1}>
          {WorkDatas.map((data, i) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345, boxShadow: "none" }} key={i}>
                  <img
                    width={80}
                    height={80}
                    src={data.svg}
                    style={{ padding: "10px" }}
                    alt=""
                  ></img>
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                        marginBottom: "15px",
                      }}
                      variant="h3"
                      component="div"
                    >
                      {data.Title}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      sx={{ fontSize: "16px" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default WorkFaster;
