import React from 'react';
import { Box, Button } from '@mui/material';

const CardActionsSection: React.FC = () => {
    return (
        <Box mt={1}>
            <Button variant="contained" color="primary" size="large">
                View report
            </Button>
        </Box>
    );
};

export default CardActionsSection;
