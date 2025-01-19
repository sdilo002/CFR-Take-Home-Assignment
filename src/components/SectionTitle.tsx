import React from 'react';
import { Chip, Box } from '@mui/material';
import '../App.css';

interface SectionTitleProps {
  type: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ type }) => {
  return (
    <Box className={`section-title-circle ${type}-bg-color`} my={3}>
      <Chip
        label={type}
        className={`type-badge ${type}-badge`}
        size="medium"
        variant="filled"
      />
    </Box>
  );
};

export default SectionTitle;
