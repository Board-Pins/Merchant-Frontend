// StyledPagination.js
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    '&.Mui-selected': {
      backgroundColor: '#6161FF !important', // Ensure the color is applied
      color: '#FFFF !important', // Ensure the text color is applied
    },
  },
}));

export default StyledPagination;
