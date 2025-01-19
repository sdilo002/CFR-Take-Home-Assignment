import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Button } from '@mui/material';
import { BookmarkBorder as BookmarkIcon, Language as LanguageIcon } from '@mui/icons-material';
import { CardComponentProps } from '../types/types';

const CardComponent: React.FC<CardComponentProps> = ({ item }) => {
  const {
    type,
    name,
    logo,
    stats: {
      price,
      currency,
      priceType,
      changePercentage,
      changeType,
      marketCap,
      marketCapUnit,
      volume,
      volumeUnit,
      chainName,
      chainType,
    },
  } = item;

  return (
    <Card className="card-container">
      {/* Logo Container */}
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
      <CardContent className={`card-content-container ${type}-card-content-container`}>
        {/* Link Box */}
        <Box className="link-tab-container">
          <Box className={`link-tab ${type}-link-tab`}>
            <IconButton className="icon-light">
              <LanguageIcon />
            </IconButton>
          </Box>
        </Box>
        {/* Stats Box */}
        <Box className="stats-container">
          {/* Top Row */}
          <Box display="flex" direction="row" mt={2} justifyContent="space-between">
            <Box>
              <Typography variant="h6" color="textPrimary">
                {currency == "USD" && "$"}{price}
                <Typography display={'inline'} pl={1}>
                  {currency}
                </Typography>
              </Typography>
              <Typography variant="h6" color="textPrimary">
                {priceType}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems={changePercentage ? "end" : "start"}>
              {changePercentage && (
                <>
                  <Typography
                    className={`change-badge ${changePercentage < 0 ? 'change-badge-negative' : 'change-badge-positive'}`}
                  >
                    {changePercentage}%
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    {changeType}
                  </Typography>
                </>
              )}
              {chainName && chainType && (
                <>
                  <Typography variant="h6" color="textSecondary">
                    {chainName}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    {chainType}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
          {/* Bottom Row */}
          <Box display="flex" direction="row"  justifyContent="space-between">
            <Box>
              {marketCap && marketCapUnit && (
                <>
                  <Typography variant="h6" color="textPrimary">
                    {marketCap} {marketCapUnit}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    Market Cap
                  </Typography>
                </>
              )}
              {volume && volumeUnit && (
                <>
                  <Typography variant="h6" color="textPrimary">
                    {volume}
                    <Typography display={'inline'} pl={1}>
                      {volumeUnit}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    Total volume
                  </Typography>
                </>
              )}
            </Box>
            <Box mt={1} >
              <Button variant="contained" color="primary" size="large">
                View report
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;