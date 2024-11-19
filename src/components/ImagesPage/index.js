import React from 'react'
import Box from '@mui/material/Box';
import HowToCrop from '../HowToCrop'
import WorkFaster from '../WorkFaster'  
import FAQs from '../FAQs'
import DocMade from '../DocMade'
import { PdfEditor } from '../Editors';
import ImagesDropInput from '../ImagesDropInput';

export const ImagesFIle = () => {
  return (
    <Box>
            <ImagesDropInput />
            <PdfEditor/>
            <HowToCrop />
            <WorkFaster />
            <FAQs />
            <DocMade />
        </Box>
  )
}
