import React from "react";
import { Button, Typography, Container } from "@mui/material";

const FAQs = () => {
  return (
    <div
      style={{ marginTop: "35px", marginBottom: "35px", background: "#EEEDEB" }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#666",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "36px",
            marginBottom: "35px",
            paddingTop: "20px",
          }}
        >
          FAQs About Our PDF Compression Tool
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              Is this document compression tool free to use?
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "16px",
                marginBottom: "35px",
              }}
            >
              Yes! All of our tools, including our tool to compress files, are
              free to use with certain limitations. You’re also not limited to
              only compressing PDFs; you can reduce the file size of other
              document types, like MS Office files, JPG, PNG, GIF, and TIFF.
              Simply drop your files into the tool to get started.
            </Typography>
            <hr style={{ width: "100%" }}></hr>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              Can I get Compress PDF for my whole team?
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "16px",
                marginBottom: "35px",
              }}
            >
              Absolutely. We offer both Business and Team plans that give you
              and your team or business unlimited access to all our Pro features
              and more. You’ll also enjoy some added extras, such as flexible
              payment options and priority customer support. Feel free to
              contact our sales team for a custom quote.
            </Typography>
            <hr style={{ width: "100%" }}></hr>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              Do I need a paid Smallpdf Pro account to compress files?
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "16px",
                marginBottom: "35px",
              }}
            >
              No, you don’t need a Smallpdf Pro subscription to compress your
              documents. That said, a Pro subscription will give you unlimited
              access to our compression tool, plus all our other tools, so you
              can convert, e-sign, merge, and split documents, and more—with
              zero limitations.
            </Typography>
            <hr style={{ width: "100%" }}></hr>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "22px",
                marginBottom: "15px",
              }}
            >
              Is the compress tool safe to use?
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "16px",
                marginBottom: "35px",
              }}
            >
              At Smallpdf, we’re committed to safety and security. We’re GDPR
              compliant, undergo annual audits to earn our ISO/IEC
              certification, and carry advanced TLS encryption, which means that
              your data, personal information, and documents are safe with us.
              What’s more, each time you perform a task, like compressing a
              file, this entire process is fully encrypted for full-scale
              security.
            </Typography>
            <Button variant="contained">Contained</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQs;
