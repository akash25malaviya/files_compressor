import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";

const HowToCrop = () => {
  return (
    <div style={{ marginTop: "35px", marginBottom: "35px" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#666",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "36px",
          }}
        >
          How To Crop PDF Pages Or Trim PDF Margins For Free
        </Typography>
        <hr style={{ border: "1px solid #eee" }}></hr>
        <Typography
          sx={{ color: "#666", textAlign: "center", fontSize: "26px" }}
        >
          Below we show how to trim PDF margins online, for free. Works on all
          desktop platforms including Mac.
        </Typography>
        <Box sx={{ marginTop: "40px" }}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography
                sx={{ color: "#666", fontWeight: "700", fontSize: "24px" }}
              >
                1.
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "20px",
                  color: "#666",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                {" "}
                Upload your files
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Files are safely uploaded over an encrypted connection. Files
                stay secure. After processing, they are permanently deleted.
              </Typography>
              <div
                style={{
                  marginBottom: "20px",
                  padding: "20px",
                  backgroundColor: "rgba(37, 144, 102, .07)",
                }}
              >
                <Typography sx={{ fontSize: "18px" }}>
                  Rather not upload your files and work with them offline?
                </Typography>
                <Typography sx={{ fontSize: "18px" }}>
                  Try Sejda Desktop. Same features as the online service, and
                  the files never leave your computer.
                </Typography>
              </div>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Click 'Upload' and select files from your local computer.
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Dragging and dropping files to the page also works.
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  color: "#666",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Dropbox or Google Drive files
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                You can pick PDF files from Dropbox or Google Drive too.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography
                sx={{ color: "#666", fontWeight: "700", fontSize: "24px" }}
              >
                2.
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "20px",
                  color: "#666",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Select your desired compression level
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Files are safely uploaded over an encrypted connection. Files
                stay secure. After processing, they are permanently deleted.
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Click 'Upload' and select files from your local computer.
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Dragging and dropping files to the page also works.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography
                sx={{ color: "#666", fontWeight: "700", fontSize: "24px" }}
              >
                3.
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "20px",
                  color: "#666",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Compress PDF
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                Click the 'Compress' button and then 'Download' your compressed
                PDF. Or, click on the 'More options' button for advanced
                settings.
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                The compression algorithm does the following:
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                1. The compression algorithm does the following:
              </Typography>
              <Typography sx={{ marginBottom: "20px", fontSize: "18px" }}>
                2. Removes unused fonts and images
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HowToCrop;
