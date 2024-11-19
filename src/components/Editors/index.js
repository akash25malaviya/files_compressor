import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import { FaFilePdf } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { FaImages } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PdfEditor = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={12} lg={3} xl={3} >
                        <Item style={{ backgroundColor: "rgba(37, 144, 102, 0.07)", borderRadius: "6px", padding: "20px", color: "#666" }}>
                            <Link to={"/"} style={{ textDecoration: "none", color: "#666" }}>
                                <Box sx={{ display: "flex", gap: "13px" }}>
                                    <FaFilePdf />
                                    <Typography sx={{ marginTop: "-4px" }}>PDF Editor</Typography>
                                </Box>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ textAlign: "justify" }}>Reduce the size of your PDF files easily.</Typography>
                                </Box>
                            </Link>
                        </Item>
                    </Grid>
                    <Grid item sm={12} md={12} lg={3} xl={3} >
                        <Item style={{ backgroundColor: "rgba(37, 144, 102, 0.07)", borderRadius: "6px", padding: "20px", color: "#666" }}>
                            <Link to={"/video"} style={{ textDecoration: "none", color: "#666" }}>
                                <Box sx={{ display: "flex", gap: "13px" }}>
                                    <FaFileVideo />
                                    <Typography sx={{ marginTop: "-4px" }}>Video Editor</Typography>
                                </Box>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ textAlign: "justify" }}>Reduce the size of your Video files easily.</Typography>
                                </Box>
                            </Link>
                        </Item>
                    </Grid>
                    <Grid item sm={12} md={12} lg={3} xl={3}>
                        <Item style={{ backgroundColor: "rgba(37, 144, 102, 0.07)", borderRadius: "6px", padding: "20px", color: "#666" }}>
                            <Link to={"/docx"} style={{ textDecoration: "none", color: "#666" }}>
                                <Box sx={{ display: "flex", gap: "13px" }}>
                                    <SiGoogledocs />
                                    <Typography sx={{ marginTop: "-4px" }}>Docx Editor</Typography>
                                </Box>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ textAlign: "justify" }}>Reduce the size of your Docx files easily.</Typography>
                                </Box>
                            </Link>
                        </Item>
                    </Grid>
                    <Grid item sm={12} md={12} lg={3} xl={3}>
                        <Item style={{ backgroundColor: "rgba(37, 144, 102, 0.07)", borderRadius: "6px", padding: "20px", color: "#666" }}>
                        <Link to={"/image"} style={{ textDecoration: "none", color: "#666" }}>
                            <Box sx={{ display: "flex", gap: "13px" }}>
                                <FaImages />
                                <Typography sx={{ marginTop: "-4px" }}>Images Editor</Typography>
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{ textAlign: "justify" }}>Reduce the size of your Images files easily.</Typography>
                            </Box>
                            </Link>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
