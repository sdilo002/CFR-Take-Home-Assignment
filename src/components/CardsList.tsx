import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { Grid, Box } from '@mui/material';
import CardComponent from './CardComponent';
import SectionTitle from './SectionTitle';
import { setItems } from '../store/features/itemsSlice';
import { fetchItems } from '../backend/api';
import { Item } from '../types/types';
import { RootState } from '../store/store'
import '../App.css';
import { AppDispatch } from '../store/store';

const CardsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, error, isLoading } = useQuery<Item[]>('items', fetchItems);

  const items = useSelector((state: RootState) => state.items.items);

  useEffect(() => {
    if (data) {
      dispatch(setItems(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <Box className="cards-list-container">
      <Grid container spacing={3}>
        {items && items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id} display="flex" direction="column" alignItems="center">
            <SectionTitle type={item.type} />
            <CardComponent item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsList;
