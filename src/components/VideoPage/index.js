import React from 'react'
import Box from '@mui/material/Box';
import VideoDropsInput from '../VideoDropsInput'
import HowToCrop from '../HowToCrop'
import WorkFaster from '../WorkFaster'
import FAQs from '../FAQs'
import DocMade from '../DocMade'
import { PdfEditor } from '../Editors';
export const VideosFile = () => {
  return (
    <Box>
            <VideoDropsInput />
            <PdfEditor/>
            <HowToCrop />
            <WorkFaster />
            <FAQs />
            <DocMade />
        </Box>
  )
}
