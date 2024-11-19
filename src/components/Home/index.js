import React from "react";
import Box from "@mui/material/Box";
import DragAndDropInput from "../DropZone";
import HowToCrop from "../HowToCrop";
import WorkFaster from "../WorkFaster";
import FAQs from "../FAQs";
import DocMade from "../DocMade";
import { PdfEditor } from "../Editors";

const index = () => {
  return (
    <Box>
      <DragAndDropInput />
      <PdfEditor />
      <HowToCrop />
      <WorkFaster />
      <FAQs />
      <DocMade />
    </Box>
  );
};

export default index;
