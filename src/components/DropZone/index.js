import React, { useState } from "react";
import {
  Button,
  Paper,
  Typography,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import PDF from "../../Images/pdf-file.png";
import AxiosInterceptor from "../../services/interceptor";

const DragAndDropInput = () => {
  const [loading, setLoading] = useState(false);
  const [DownloadLoading, setDownloadLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [compressedPDFUrl, setCompressedPDFUrl] = useState(null);
  const [isCompressed, setIsCompressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setIsDragActive(false);
    setIsCompressed(false);
    setCompressedPDFUrl(null);
    setErrorMessage("");
  };

  const downloadCompressedPDF = () => {
    setDownloadLoading(true);
    fetch(compressedPDFUrl)
      .then((response) => response.blob())
      .then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        const fileName = compressedPDFUrl.substring(
          compressedPDFUrl.lastIndexOf("/") + 1
        );
        a.download = fileName;
        a.target = "_blank";
        a.click();
      })
      .catch((error) => {
        setErrorMessage("Error downloading the file");
        console.error("Download error:", error);
      })
      .finally(() => {
        setDownloadLoading(false);
      });
  };

  const fetchData = async () => {
    if (files.length === 0) {
      setErrorMessage("No files selected for compression");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const formData = new FormData();
      formData.append("file", files[0]);

      const response = await AxiosInterceptor.post("pdf/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        const compressedPDFUrl = response.data.compressed_pdf;
        setCompressedPDFUrl(compressedPDFUrl);
        setIsCompressed(true);
      } else {
        if(response?.data?.file?.length > 0){
          setErrorMessage(response?.data?.file?.[0]);
        }else{
          setErrorMessage(response?.data?.message);
        }
      }
    } catch (error) {
      setErrorMessage("Error fetching compression results");
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Specify accepted file types
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <>
      <div style={{ marginTop: "35px", marginBottom: "35px" }}>
        <Box sx={{ marginY: "45px", paddingY: "20px", background: "#EEEDEB" }}>
          <Container maxWidth="lg">
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: "36px",
              }}
            >
              Crop PDF Online
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "26px",
                color: "#9aa5aa",
              }}
            >
              Trim PDF margins, change PDF page size
            </Typography>
            <Box sx={{ marginY: "20px" }}>
              <Paper
                variant="outlined"
                {...getRootProps()}
                style={{
                  cursor: "pointer",
                  border: !isDragActive ? "3px dashed #aaa" : "3px solid #ccc",
                  backgroundColor: isDragActive ? "#f0f0f0" : "#fff",
                  height: "calc(100% - 44px)",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              >
                <input {...getInputProps()} />
                <img
                  src={PDF}
                  width={200}
                  height={200}
                  style={{ padding: "16px" }}
                  alt=""
                ></img>
                {isDragActive ? (
                  <Typography align="center" variant="body1">
                    Drop your files here
                  </Typography>
                ) : (
                  <Typography
                    align="center"
                    variant="body1"
                    sx={{ margin: "auto" }}
                  >
                    Drag 'n' drop some files here, or click to select files
                  </Typography>
                )}
              </Paper>
              {files && (
                <div>
                  <Typography variant="subtitle1">Uploaded files:</Typography>

                  {files.map((file) => (
                    <>
                      <Typography key={file.name}>{file.name}</Typography>
                    </>
                  ))}
                </div>
              )}
            </Box>
            {errorMessage && (
              <Typography color="error" align="center">
                {errorMessage}
              </Typography>
            )}
            <Typography sx={{ color: "#888", textAlign: "center" }}>
              Free service for documents up to 200 Pages or 50 MB
            </Typography>
            <Button
              onClick={fetchData}
              variant="contained"
              sx={{
                color: "#fff",
                textAlign: "center",
                marginRight: "30px",
                position: "relative",
              }}
              disabled={loading || isCompressed || files.length === 0}
            >
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}{" "}
              COMPRESS PDF
            </Button>
            <Button
              onClick={downloadCompressedPDF}
              disabled={DownloadLoading || !isCompressed}
              variant="contained"
              sx={{ color: "#fff", textAlign: "center", position: "relative" }}
            >
              {DownloadLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}{" "}
              Download
            </Button>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default DragAndDropInput;
