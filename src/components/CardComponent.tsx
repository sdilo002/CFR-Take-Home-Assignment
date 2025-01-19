import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import CardLogoSection from './CardLogoSection';
import CardStatsSection from './CardStatsSection';
import CardLinkSection from './CardLinkSection';
import { CardComponentProps } from '../types/types';

const CardComponent: React.FC<CardComponentProps> = ({ item }) => {
  const { type } = item;

  return (
    <Card className="card-container">
      <CardLogoSection item={item} />
      <CardContent className={`card-content-container ${type}-card-content-container`}>
        <CardLinkSection item={item} />
        <CardStatsSection item={item} />
      </CardContent>
    </Card>
  );
};

export default CardComponent;
