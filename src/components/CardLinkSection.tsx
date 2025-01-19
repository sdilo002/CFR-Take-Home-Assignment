import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { CardComponentProps } from '../types/types';

const CardLinkSection: React.FC<CardComponentProps> = ({ item }) => {
    const { type } = item;

    return (
        <Box className="link-tab-container">
            <Box className={`link-tab ${type}-link-tab`}>
                <IconButton className="icon-light">
                    <LanguageIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CardLinkSection;
