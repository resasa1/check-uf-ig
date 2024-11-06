import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Guide() {
  return (
    <div className='guide__json'>
    
      <Accordion className='how__json'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <h5>Bagaimana cara mendapatkan file .json?</h5>
        </AccordionSummary>
        <AccordionDetails>
         <p>
            1. Buka akun instagram kamu 
        </p>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Guide;
