import React from 'react';
import { Box, CardMedia, Typography, IconButton } from '@mui/material';
import { BookmarkBorder as BookmarkIcon } from '@mui/icons-material';
import { CardComponentProps } from '../types/types';

const CardLogoSection: React.FC<CardComponentProps> = ({ item }) => {
    const { type, logo, name } = item;

    return (
        <Box className="absolute-container">
            <Box className={`logo-container ${type}-logo`}>
                <CardMedia
                    component="img"
                    image={`/assets/${logo}`}
                    alt={`${name} Logo`}
                />
                <Typography className={`type-badge ${type}-badge`}>
                    {type}
                </Typography>
                <Typography className='logo-name'>
                    {name}
                </Typography>
                <Box className={`bookmark-tab ${type}-bookmark-tab`}>
                    <IconButton className="icon-light">
                        <BookmarkIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default CardLogoSection;
