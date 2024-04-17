import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import ListCard from './ListCard';

export default function Accordion1({Data,expand,Collapse,index}) {
  return (
    <div>
      <Accordion sx={{ml:"10px",mr:"10px",mt:"10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
          sx={{
            background:"#DEB887",
            borderRadius: '6px !important',
            marginBottom: '8px !important',
            boxShadow:
              '5px 5px 10px rgba(163, 177, 198, 0.4), -5px -5px 10px rgba(255, 255, 255, 0.3) !important'
          }}
        >
         <Typography sx={{ color: 'black' }}>
                <b>{Data.name}</b> 
              </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: 1, mb: '10px' }}>
          {<ListCard items={Data}></ListCard>}
        </AccordionDetails>
      </Accordion>

    </div>
  );
}