
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SidebarAccordion = ({ icon, text }) => (
  <Accordion sx={{ boxShadow: 'none', margin: 0 }} style={{ borderRadius: '9px', border: '0px solid #ddd', overflow: 'hidden' }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
      sx={{ color: "#666666", fontSize: "14px", fontWeight: "400", margin: "0px" }}
    >
      <div className='flex justify-center items-center'>
        <img src={icon} alt='workspace' className='w-[40px] px-1 m-0' />
        <span className=' font-[500] text-[14px] px-3'>{text}</span>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <hr />
    </AccordionDetails>
  </Accordion>
);

export default SidebarAccordion;
