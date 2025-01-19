import React from 'react';
import { Box, Typography } from '@mui/material';
import { CardComponentProps } from '../types/types';
import CardActionsSection from './CardActionsSection';

const CardStatsSection: React.FC<CardComponentProps> = ({ item }) => {
    const {
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
        }
    } = item;

    return (
        <Box className="stats-container">
            {/* Top Row */}
            <Box display="flex" direction="row" mt={2} justifyContent="space-between">
                <Box>
                    <Typography variant="h6" color="textPrimary">
                        {currency === "USD" && "$"}{price}
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
                            <Typography className={`change-badge ${changePercentage < 0 ? 'change-badge-negative' : 'change-badge-positive'}`}>
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
            <Box display="flex" direction="row" justifyContent="space-between">
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
                <CardActionsSection />
            </Box>
        </Box>
    );
};

export default CardStatsSection;
